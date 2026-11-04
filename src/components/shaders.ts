// Fragmentos GLSL dos fundos do hero. Mesmos uniforms em todos: uRes, uTime, uMouse, uEnergy.
export type HeroVariant = "waves" | "aurora" | "ripples";

// Ondas sonoras (versão original aprovada)
const waves = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uEnergy;

float line(float d, float w){ return smoothstep(w, 0., abs(d)); }

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 q = vec2(uv.x * asp, uv.y);

  vec3 sand = vec3(0.957, 0.929, 0.894);
  vec3 peach = vec3(0.93, 0.80, 0.68);
  vec3 clay = vec3(0.77, 0.34, 0.18);
  vec3 sage = vec3(0.49, 0.55, 0.44);

  // fundo: manchas suaves em movimento lento
  float b1 = smoothstep(.9, .0, distance(uv, vec2(.78 + .05*sin(uTime*.2), .35)));
  float b2 = smoothstep(.8, .0, distance(uv, vec2(.15, .85 + .04*cos(uTime*.25))));
  vec3 col = mix(sand, peach, b1 * .75);
  col = mix(col, sage * 1.25, b2 * .22);

  float m = distance(vec2(uv.x * asp, uv.y), vec2(uMouse.x * asp, uMouse.y));
  float influence = exp(-m * 2.6) * uEnergy;

  float acc = 0.;
  vec3 tint = vec3(0.);
  for(int i = 0; i < 28; i++){
    float f = float(i) / 27.;
    float y = .18 + f * .64;
    float phase = uTime * (.35 + f * .25) + f * 6.2831;
    float env = smoothstep(0., .25, uv.x) * smoothstep(1., .55, uv.x);
    float amp = (.02 + .07 * sin(uv.x * 2.2 + uTime * .3 + f * 3.) * sin(uv.x * 1.1 - f * 5.)) * env;
    amp += influence * .09 * sin(uv.x * 14. - uTime * 3.);
    float wave = y + amp * sin(uv.x * (5. + f * 6.) + phase);
    float l = line(uv.y - wave, .0035 + .002 * f);
    float a = l * (.25 + .6 * f);
    acc += a;
    tint += a * mix(clay, sage, f);
  }
  col = mix(col, tint / max(acc, .001), clamp(acc, 0., 1.) * .85);
  gl_FragColor = vec4(col, 1.);
}`;

const noise = `
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
}
float fbm(vec2 p){ float v = 0., a = .5; for(int i = 0; i < 5; i++){ v += a * noise(p); p *= 2.02; a *= .5; } return v; }
`;

// Aurora: fluido quente com domain warping; o mouse puxa o líquido.
const aurora = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uEnergy;
${noise}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 q = vec2(uv.x * asp, uv.y) * 1.7;
  vec2 m = vec2(uMouse.x * asp, uMouse.y) * 1.7;
  q += (m - q) * exp(-distance(q, m) * 1.8) * .35 * uEnergy;

  float t = uTime * .09;
  vec2 w = vec2(fbm(q + vec2(0., t)), fbm(q + vec2(5.2, 1.3) - t));
  float f = fbm(q + 2.2 * w + t);

  vec3 sand = vec3(0.957, 0.929, 0.894);
  vec3 peach = vec3(0.94, 0.78, 0.64);
  vec3 clay = vec3(0.77, 0.34, 0.18);
  vec3 sage = vec3(0.55, 0.62, 0.50);

  vec3 col = mix(sand, peach, smoothstep(.25, .7, f));
  col = mix(col, clay, smoothstep(.58, .9, f) * .75);
  col = mix(col, sage, smoothstep(.38, .1, f) * .45);
  col += (hash(gl_FragCoord.xy + uTime) - .5) * .025;
  gl_FragColor = vec4(col, 1.);
}`;

// Ondas na água em halftone: círculos de pontos que pulsam do centro e do mouse.
const ripples = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uEnergy;
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  float cells = 64.;
  vec2 g = vec2(uv.x * asp, uv.y) * cells;
  vec2 id = floor(g);
  vec2 fr = fract(g) - .5;
  vec2 c = (id + .5) / cells;

  float d1 = distance(c, vec2(.74 * asp, .5));
  float d2 = distance(c, vec2(uMouse.x * asp, uMouse.y));
  float w = sin(d1 * 20. - uTime * 1.5) * exp(-d1 * 1.5);
  w += sin(d2 * 30. - uTime * 2.4) * exp(-d2 * 3.2) * uEnergy * 1.2;
  float k = w * .5 + .5;

  vec3 sand = vec3(0.957, 0.929, 0.894);
  vec3 peach = vec3(0.93, 0.80, 0.68);
  vec3 clay = vec3(0.77, 0.34, 0.18);
  vec3 sage = vec3(0.49, 0.55, 0.44);

  vec3 bg = mix(sand, peach, smoothstep(.9, .0, distance(uv, vec2(.8, .45))) * .6);
  float r = .1 + .38 * pow(max(w, 0.), .8);
  float dotMask = smoothstep(r, r - .1, length(fr));
  vec3 ink = mix(sage, clay, smoothstep(.35, .85, k));
  gl_FragColor = vec4(mix(bg, ink, dotMask * .9), 1.);
}`;

export const shaders: Record<HeroVariant, string> = { waves, aurora, ripples };
