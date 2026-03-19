import { asset } from '../utils/asset.js'

export const projects = [
  {
    id: 'narrative',
    accent: 'primary',
    engine: 'Unreal Engine 5 - Blueprints',
    title: 'Thaelia',
    status: 'In Development',
    desc: 'Third-person narrative exploration on a remote island with 10 distinct NPCs. Built entirely in Blueprints on top of GASP 5.7 - extended Mover with a custom climbing mode, built an interaction and inventory system, and wired a day/night cycle to NPC scheduling and dialogue.',
    systems: [
      { name: 'Custom Climbing Mode', detail: 'New movement mode layered on GASP 5.7 / Mover - ledge detection, state transitions, animation blending.' },
      { name: 'Interaction & Inventory', detail: 'Interface-driven interaction with persistent inventory - tracks what each actor picked up.' },
      { name: 'Day/Night + NPC Scheduling', detail: 'Hourly events fire from the time manager - NPCs react by moving to locations or changing tasks.' },
      { name: 'Dialogue System', detail: 'Base component owns all building blocks - each NPC child overrides one function to assemble its own conversation.' },
    ],
    tags: ['Unreal 5.7', 'Blueprints', 'GASP / Mover', 'AI Scheduling', 'Perforce'],
    meta: [
      { label: 'Engine', value: 'Unreal Engine 5.7' },
      { label: 'Scripting', value: 'Blueprints only' },
      { label: 'Framework', value: 'GASP 5.7 / Mover' },
      { label: 'Version Control', value: 'Perforce' },
    ],
    tagline: 'Third-person narrative exploration on a remote island. 10 distinct NPCs living on a schedule, a world that changes with the time of day, and a dialogue system to talk to all of them. Built entirely in Blueprints on top of GASP 5.7.',
    heroMedia: { src: asset('media/thaelia/dialogue.webp'), alt: 'Dialogue system', caption: 'Dialogue system' },
    thumbMedia: [
      { src: asset('media/thaelia/climbing.gif'), alt: 'Climbing system', caption: 'Climbing system' },
      { src: asset('media/thaelia/AI_patrol.gif'), alt: 'NPC patrol & scheduling', caption: 'NPC patrol & scheduling' },
      { src: asset('media/thaelia/day-night-cycle.gif'), alt: 'Day / night cycle', caption: 'Day / night cycle' },
    ],
    systemBlocks: [
      {
        name: 'Custom Climbing Movement Mode',
        desc: 'New movement mode on top of GASP 5.7 / Mover - added cleanly alongside the defaults, no framework code forked.',
        details: [
          'Studied GASP 5.7 and Mover architecture to understand how to register a new movement mode without touching framework Blueprints',
          'Line traces detect climbable surfaces by collision channel - surfaces opt in, no hardcoded logic',
          'State transitions: approach → grab → climb → dismount - each state owns its movement and animation logic',
          'Animation Blueprint integration with motion matching for smooth blends in and out of climbing',
        ],
        blueprint: { label: 'BP_ClimbingMode - angle calculations', tag: 'Blueprint', src: asset('media/thaelia/BP_climbing.jpeg'), alt: 'Climbing mode Blueprint' },
      },
      {
        name: 'Interaction & Inventory System',
        desc: 'Any actor becomes interactable by implementing one interface - no base class, no coupling. Capsule overlap on the player fires the event; no per-tick traces.',
        details: [
          'Capsule overlap on the player triggers entry - no per-tick traces, event-driven',
          'Overlapping actor checked for the Interactable interface - if it implements Interact, it\'s eligible',
          'Interface requires only one function: Interact - each actor decides what that means for itself',
          'Inventory component on player and NPCs stores picked-up items as a data array',
          'Pickups, NPCs, and any other actor all go through the same pipeline - zero duplication',
        ],
        blueprint: { label: 'BP_InteractionComponent - capsule overlap & interface call', tag: 'Blueprint', src: asset('media/thaelia/BP_Interaction.jpeg'), alt: 'Interaction system Blueprint' },
      },
      {
        name: 'Day/Night Cycle + NPC Scheduling',
        desc: 'Time manager fires a dispatcher every in-game hour. NPCs check their schedule and move or switch tasks. Sky and lighting run off the same timer - visual and simulation always in sync.',
        details: [
          'Day/Night Manager: configurable day length, broadcasts an hourly event dispatcher',
          'NPC Schedule: data table per NPC mapping hours to behaviour states (Idle, Work, Eat, Sleep, Patrol)',
          'On hour tick: NPC reads its schedule, moves to the designated location, transitions behaviour state',
          '10 distinct NPCs each with their own schedule - designers edit data tables, no Blueprint changes needed',
          'Sky and lighting actors driven by the same time manager via curves - visual and simulation stay in sync',
        ],
        blueprint: { label: 'ST_NPC_AI - State Tree', tag: 'State Tree', src: asset('media/thaelia/ST_AI.jpeg'), alt: 'NPC AI State Tree' },
      },
      {
        name: 'Dialogue System',
        desc: 'Base component owns the building blocks. Each NPC child overrides one function - that\'s the whole conversation. No boilerplate repeated.',
        details: [
          'Base component defines reusable building blocks - show line, show choices, wait for response',
          'Each NPC has a child Blueprint component overriding only the Dialogue function - no boilerplate repeated',
          'Adding a new NPC dialogue means creating a child and wiring building blocks - parent logic untouched',
          'Triggered via the interaction system - talking to an NPC is just another Interact call',
        ],
        blueprint: { label: 'BP_DialogueComponent - base class & child override', tag: 'Blueprint', src: asset('media/thaelia/BP_Dialogue.jpeg'), alt: 'Dialogue system Blueprint' },
      },
    ],
    takeaways: [
      'Extended GASP 5.7 and Mover cleanly - no framework code touched.',
      'All systems decoupled - interfaces and dispatchers, no hard references.',
      'NPC schedules in data tables - new NPC means a new row, not a new Blueprint.',
      'Four systems, 10 NPCs, Blueprints only. Production architecture without C++.',
      'Set up Perforce for the team - depot, streams, workspace config, UE integration.',
    ],
  },
  {
    id: 'horror',
    accent: 'secondary',
    engine: 'Unreal Engine 5.7 - Blueprints',
    title: 'Echo',
    status: 'Prototype',
    desc: 'A slow-burn horror survival built on a single constraint: you only perceive the world through sound. Every noise renders as a visible ripple in world space. Silence is blindness.',
    systems: [
      { name: 'Sound Visualisation System', detail: 'Audio events mapped to world-space visual rings with amplitude-driven decay and scale.' },
      { name: 'Playability Prototype', detail: 'Core loop designed to answer: is a game without traditional visuals actually playable?' },
    ],
    tags: ['Unreal 5.7', 'Blueprints', 'Audio systems', 'Niagara'],
    tagClass: 'blue',
    meta: [
      { label: 'Engine', value: 'Unreal Engine 5.7' },
      { label: 'Scripting', value: 'Blueprints only' },
      { label: 'Genre', value: 'Horror Survival' },
      { label: 'Status', value: 'Prototype' },
    ],
    tagline: 'You only perceive the world through sound. A water drip makes a visible circle. Your footsteps do too. Silence is blindness - and something is moving.',
    heroMedia: { src: asset('media/echo/example.gif'), alt: 'Sound ripple system', caption: 'Sound ripple system' },
    thumbMedia: [],
    placeholderMedia: [
      { label: 'Water drip ripple' },
      { label: 'Player footsteps' },
    ],
    systemBlocks: [
      {
        name: 'Sound Visualisation System',
        desc: 'Every audio event - footstep, drip, enemy movement - spawns a visible ring at the source. Amplitude drives size and decay. That ring is the only visual information you get.',
        details: [
          'Audio component hooks via Unreal\'s Sound Attenuation system - no polling, event-driven',
          'Each sound event spawns a pooled niagara particle ring at world position',
          'Ring parameters (radius, speed, opacity curve) driven by sound metadata',
          'Player footsteps generate rings proportional to movement speed - crouch = smaller, quieter ring',
          'Enemy sounds vs. ambient sounds visually differentiated by ring colour and pulse pattern',
        ],
      },
      {
        name: 'Playability Research',
        desc: 'Started as a question: can a game with no traditional visuals actually be played? The prototype tests that.',
        details: [
          'Tested spatial awareness - can the player navigate using only ripple feedback?',
          'Tension mechanics: the player\'s own sounds can reveal their position to the enemy',
          'Designed to escalate: early game has many ambient sounds (orientation), late game goes silent',
        ],
      },
    ],
    takeaways: [
      'Original mechanic - built start to finish, self-directed.',
      'Built on Unreal\'s attenuation system, not around it.',
      'Niagara particles driven by runtime sound data.',
      'Built to test a hypothesis, not check a box.',
    ],
  },
  {
    id: 'unity',
    accent: 'tertiary',
    engine: 'Unity - C#',
    title: 'Intrepid Traveller',
    status: 'Prototype',
    desc: 'Story-driven racing game with horror elements. Atmosphere-first, minimal UI - narrative woven directly into gameplay. Currently polishing a vertical slice.',
    systems: [
      { name: 'Raycast Car Controller', detail: 'Built from scratch - traction circle, weight transfer, gear system.' },
      { name: 'Stencil Buffer Shader', detail: 'Objects visible only inside car headlight cones.' },
      { name: 'Ink Dialogue System', detail: 'Narrative integrated via Ink scripting language.' },
    ],
    tags: ['Unity', 'C#', 'Shaders', 'Ink', 'Raycasts'],
    tagClass: 'yellow',
    meta: [
      { label: 'Engine', value: 'Unity' },
      { label: 'Language', value: 'C#' },
      { label: 'Status', value: 'Active prototype' },
    ],
    tagline: 'A story-driven racing game with horror elements. Atmosphere-first, minimal UI - the narrative woven directly into the gameplay loop. Currently building a presentable vertical slice.',
    heroMedia: { src: asset('media/dialogue.gif'), alt: 'Dialogue system', caption: 'Dialogue system' },
    thumbMedia: [
      { src: asset('media/breakable.gif'), alt: 'Breakable objects & proximity', caption: 'Breakable objects & proximity' },
      { src: asset('media/camera.gif'), alt: 'Camera system', caption: 'Camera system' },
      { src: asset('media/stencil.gif'), alt: 'Stencil shader - car headlights', caption: 'Stencil shader - car headlights' },
    ],
    systemBlocks: [
      {
        name: 'Raycast Car Controller',
        desc: 'Raycast suspension from scratch - no wheel colliders. Surface behaviour data-driven via ScriptableObjects; add a road type without touching C#.',
        details: [
          'Raycast suspension - Hooke\'s law spring + damping per wheel, force applied at contact point',
          'Grip circle - lateral and longitudinal forces treated as a 2D vector; combined magnitude capped by normal force × grip coefficient',
          'Weight transfer - derived from CoG height, wheelbase, and trackwidth; longitudinal + lateral components smoothed toward target each FixedUpdate',
          'Automatic gears - RPM-based shift-up/shift-down with hysteresis band to prevent gear hunting',
          'SurfaceType ScriptableObjects - grip curve, rolling resistance, brake/accel multipliers, suspension damping, particle effects, all tunable per surface asset',
          'Per-wheel particles - spawn/swap/stop drift particles when surface changes mid-slide; lifetime-aware cleanup',
          'DOTween parking sequence - cinematic slow-down → rotation → reverse-into-spot animation, triggered by selection event',
        ],
        codeBlocks: [
          {
            filename: 'rayCastCar.cs - weight transfer',
            lang: 'C#',
            code: `<span class="tok-comment">// Weight transfer = (acceleration × CoG height × mass) / axle distance</span>
<span class="tok-comment">// Derived from vehicle dynamics first principles - not a lerp approximation.</span>
<span class="tok-comment">// Result feeds into each wheel's normalForce, which drives the grip circle.</span>
<span class="tok-kw">private void</span> <span class="tok-fn">CalculateLoadTransfer</span>()
{
    <span class="tok-type">Vector3</span> localAccel = transform.<span class="tok-fn">InverseTransformDirection</span>(
        (carRigidbody.linearVelocity - previousVelocity) / Time.fixedDeltaTime);

    <span class="tok-kw">float</span> totalMass = carRigidbody.mass;

    <span class="tok-kw">float</span> longitudinal = <span class="tok-type">Mathf</span>.<span class="tok-fn">Clamp</span>(
        (localAccel.z * centerOfGravityHeight * totalMass) / wheelbase,
        -totalMass * maxLoadTransferAmount, totalMass * maxLoadTransferAmount);

    <span class="tok-kw">float</span> lateral = <span class="tok-type">Mathf</span>.<span class="tok-fn">Clamp</span>(
        (localAccel.x * centerOfGravityHeight * totalMass) / trackWidth,
        -totalMass * maxLoadTransferAmount, totalMass * maxLoadTransferAmount);

    <span class="tok-kw">float</span> front = totalMass * frontToRearWeightRatio       - longitudinal;
    <span class="tok-kw">float</span> rear  = totalMass * (1f - frontToRearWeightRatio) + longitudinal;

    targetWheelLoads[0] = rear  / 2f - lateral; <span class="tok-comment">// Rear Left</span>
    targetWheelLoads[1] = front / 2f - lateral; <span class="tok-comment">// Front Left</span>
    targetWheelLoads[2] = rear  / 2f + lateral; <span class="tok-comment">// Rear Right</span>
    targetWheelLoads[3] = front / 2f + lateral; <span class="tok-comment">// Front Right</span>

    <span class="tok-comment">// Smooth toward target - prevents instantaneous weight snap</span>
    <span class="tok-kw">for</span> (<span class="tok-kw">int</span> i = 0; i &lt; 4; i++)
    {
        currentWheelLoads[i] = <span class="tok-type">Mathf</span>.<span class="tok-fn">MoveTowards</span>(currentWheelLoads[i], targetWheelLoads[i],
            transferRate * totalMass * Time.fixedDeltaTime);
        currentWheelLoads[i] = <span class="tok-type">Mathf</span>.<span class="tok-fn">Clamp</span>(currentWheelLoads[i],
            totalMass * 0.05f, totalMass * 0.8f);
        wheels[i].dynamicWeight = currentWheelLoads[i];
    }

    previousVelocity = carRigidbody.linearVelocity;
}`,
          },
          {
            filename: 'rayCastCar.cs - surface data per wheel',
            lang: 'C#',
            code: `<span class="tok-comment">// Each wheel raycasts the ground and reads a SurfaceType ScriptableObject from it.</span>
<span class="tok-comment">// Different surfaces mean different suspension feel, grip, and particles - per wheel,</span>
<span class="tok-comment">// so the front can be on asphalt while the rear is on gravel.</span>
<span class="tok-kw">private void</span> <span class="tok-fn">CalculateSuspension</span>(<span class="tok-type">WheelData</span> wheel)
{
    <span class="tok-kw">float</span> offset = wheel.suspensionRestDistance - wheel.hit.distance;
    <span class="tok-kw">float</span> vel    = <span class="tok-type">Vector3</span>.<span class="tok-fn">Dot</span>(wheel.wheelTransform.up,
                       carRigidbody.<span class="tok-fn">GetPointVelocity</span>(wheel.wheelTransform.position));

    <span class="tok-comment">// suspensionDampingMultiplier from SurfaceType asset (gravel, asphalt, mud…)</span>
    <span class="tok-kw">float</span> force = (offset * wheel.springStrength)
                - (vel   * wheel.springDamper * wheel.currentSurface.suspensionDampingMultiplier);

    <span class="tok-comment">// Dynamic weight from load transfer feeds directly into normal force</span>
    <span class="tok-kw">float</span> weightForce = wheel.dynamicWeight * 9.81f;
    wheel.normalForce  = <span class="tok-type">Mathf</span>.<span class="tok-fn">Max</span>(0, force + weightForce);

    carRigidbody.<span class="tok-fn">AddForceAtPosition</span>(
        wheel.wheelTransform.up * (force + weightForce),
        wheel.wheelTransform.position);
}`,
          },
        ],
      },
      {
        name: 'Proximity & Interaction Scripts',
        desc: 'Two proximity detection modes for different scenarios, plus breakable objects - all feeding the same event pipeline.',
        details: [
          'ProximityManager singleton - batches all distance checks at a configurable interval (default 0.1 s) rather than per-frame per-object',
          'ProximityObject - self-registers/deregisters; fires UnityEvent on enter/exit range, gizmo visualisation in editor',
          'TriggerProximityDetector - collider-based alternative; optional action-button mode fires event only when player presses Interact inside the zone',
          'Breakable objects - trigger-spawns pre-fractured prefab at same position/rotation; FragmentManager handles timed cleanup as a separate component',
        ],
      },
      {
        name: 'Camera System',
        desc: 'Orbital controller for driving, plus a Cinemachine manager that switches on game events. Camera selection is convention-based - name matches the Ink knot.',
        details: [
          'Smooth 360° orbit - right-stick input mapped to atan2 angle, MoveTowardsAngle interpolation; instant snap to 180° on look-behind',
          'Speed-reactive FOV + orbital radius - both lerp from base to max as normalised speed rises',
          'Perlin noise camera shake - activates above configurable speed threshold; XYZ offset sampled from independent noise timers',
          'URP post-processing chain - motion blur, film grain, lens distortion, bloom, DoF; each toggleable and independently smoothed toward speed-derived target',
          'CameraManager - subscribes to dialogue and selection events; looks up matching Cinemachine camera by name and bumps its priority to cut to it',
        ],
        codeBlocks: [
          {
            filename: 'cameraEffects.cs - speed-reactive camera',
            lang: 'C#',
            code: `<span class="tok-comment">// All effects share one normalised speed value t (0 = stopped, 1 = max speed).</span>
<span class="tok-comment">// FOV, orbital radius, tilt, shake, and post-processing all read from it -</span>
<span class="tok-comment">// tunable independently, but guaranteed to stay in sync.</span>
<span class="tok-kw">void</span> <span class="tok-fn">LateUpdate</span>()
{
    <span class="tok-kw">float</span> t = <span class="tok-type">Mathf</span>.<span class="tok-fn">Clamp01</span>(targetRigidbody.linearVelocity.magnitude * 3.6f / maxSpeedKmh);

    cam.Lens.FieldOfView = <span class="tok-type">Mathf</span>.<span class="tok-fn">Lerp</span>(cam.Lens.FieldOfView, <span class="tok-type">Mathf</span>.<span class="tok-fn">Lerp</span>(baseFOV,    maxFOV,    t), Time.deltaTime * fovSmooth);
    orbital.Radius       = <span class="tok-type">Mathf</span>.<span class="tok-fn">Lerp</span>(orbital.Radius,       <span class="tok-type">Mathf</span>.<span class="tok-fn">Lerp</span>(baseRadius, maxRadius, t), Time.deltaTime * radiusSmooth);
    cam.Lens.Dutch       = <span class="tok-type">Mathf</span>.<span class="tok-fn">Lerp</span>(cam.Lens.Dutch,       maxTilt * t,                          Time.deltaTime * tiltSmooth);

    <span class="tok-comment">// Perlin noise shake - kicks in above threshold, scales with excess speed</span>
    <span class="tok-kw">if</span> (enableShake &amp;&amp; t &gt; shakeSpeedThreshold)
    {
        <span class="tok-kw">float</span> shakeT = (t - shakeSpeedThreshold) / (1f - shakeSpeedThreshold);
        shakeTimer  += Time.deltaTime * shakeFrequency;

        orbital.TargetOffset = baseTargetOffset + <span class="tok-kw">new</span> <span class="tok-type">Vector3</span>(
            <span class="tok-type">Mathf</span>.<span class="tok-fn">PerlinNoise</span>(shakeTimer, 0f)         - 0.5f,
            <span class="tok-type">Mathf</span>.<span class="tok-fn">PerlinNoise</span>(0f, shakeTimer)         - 0.5f,
            <span class="tok-type">Mathf</span>.<span class="tok-fn">PerlinNoise</span>(shakeTimer, shakeTimer) - 0.5f
        ) * shakeIntensity * shakeT;
    }
    <span class="tok-kw">else</span> { orbital.TargetOffset = baseTargetOffset; }

    <span class="tok-comment">// Post-processing: motion blur, film grain, lens distortion, bloom, DoF -</span>
    <span class="tok-comment">// all driven by the same t, each with its own smooth speed and intensity range.</span>
    <span class="tok-kw">if</span> (enableMotionBlur &amp;&amp; motionBlur != <span class="tok-kw">null</span>)
        motionBlur.intensity.value = <span class="tok-type">Mathf</span>.<span class="tok-fn">Lerp</span>(motionBlur.intensity.value,
            <span class="tok-type">Mathf</span>.<span class="tok-fn">Lerp</span>(baseMotionBlurIntensity, maxMotionBlurIntensity, t),
            Time.deltaTime * motionBlurSmooth);
}`,
          },
        ],
      },
      {
        name: 'Stencil Buffer Shader',
        desc: 'Objects only visible inside the headlight cones. Cone mesh renders first - writes a stencil ID, draws nothing. World objects skip pixels where the ID doesn\'t match.',
        details: [
          'Queue Geometry-1 - cone mesh renders before everything else in the frame',
          'Blend Zero One + ZWrite Off - draws nothing visually; acts as a pure GPU mask',
          'Stencil Pass Replace - stamps the ID wherever the cone covers, regardless of what was there',
          'World objects use Stencil Comp Equal - only draw where the ID matches; invisible everywhere else',
        ],
        codeBlocks: [
          {
            filename: 'stencilBuffer.shader - headlight mask',
            lang: 'HLSL',
            code: `<span class="tok-comment">// Applied to the headlight cone mesh. Renders nothing visible -</span>
<span class="tok-comment">// only writes a stencil ID to every pixel the cone covers.</span>
<span class="tok-comment">// World objects with Stencil { Comp Equal } skip drawing outside it.</span>
<span class="tok-type">Shader</span> <span class="tok-str">"Custom/StencilMask"</span>
{
    <span class="tok-type">Properties</span>
    {
        [IntRange] _StencilID (<span class="tok-str">"Stencil ID"</span>, Range(0, 255)) = 0
    }
    <span class="tok-type">SubShader</span>
    {
        <span class="tok-type">Tags</span> { <span class="tok-str">"Queue"</span>=<span class="tok-str">"Geometry-1"</span> } <span class="tok-comment">// render before everything else</span>

        <span class="tok-type">Pass</span>
        {
            Blend Zero One  <span class="tok-comment">// discard own colour - purely a mask</span>
            ZWrite Off

            <span class="tok-type">Stencil</span>
            {
                Ref [_StencilID]
                Comp Always
                Pass Replace   <span class="tok-comment">// stamp ID wherever the cone mesh covers</span>
            }
        }
    }
}`,
          },
        ],
      },
      {
        name: 'Ink Dialogue System',
        desc: 'Story content lives in .ink files - no C# to touch to write narrative. Variable state persists across sessions.',
        details: [
          'InkDialogueVariables - snapshots all Ink global variables at startup; re-syncs them back into the story each time dialogue opens, so state survives between knots',
          'ChoosePathString - dialogue jumps directly to the named knot, so any object can trigger any story branch',
          'Dialogue initiator component - configure knot name + character/card sprites in inspector; one method call to start or end dialogue',
          'UI fully decoupled - DialogueManager fires events; DialoguePanelUI and ChoiceButtons only listen, no upward references',
        ],
        codeBlocks: [
          {
            filename: 'InkDialogueVariables.cs - persistent story state',
            lang: 'C#',
            code: `<span class="tok-comment">// Ink's Story resets on each run. This class captures all global variables</span>
<span class="tok-comment">// at startup and syncs them back in at the start of every session,</span>
<span class="tok-comment">// so the story remembers what happened in previous conversations.</span>
<span class="tok-kw">public class</span> <span class="tok-type">InkDialogueVariables</span>
{
    <span class="tok-kw">private</span> <span class="tok-type">Dictionary</span>&lt;<span class="tok-kw">string</span>, Ink.Runtime.<span class="tok-type">Object</span>&gt; variables;

    <span class="tok-kw">public</span> <span class="tok-fn">InkDialogueVariables</span>(<span class="tok-type">Story</span> story)
    {
        variables = <span class="tok-kw">new</span> <span class="tok-type">Dictionary</span>&lt;<span class="tok-kw">string</span>, Ink.Runtime.<span class="tok-type">Object</span>&gt;();
        <span class="tok-kw">foreach</span> (<span class="tok-kw">string</span> name <span class="tok-kw">in</span> story.variablesState)
            variables.Add(name, story.variablesState.<span class="tok-fn">GetVariableWithName</span>(name));
    }

    <span class="tok-kw">public void</span> <span class="tok-fn">SyncVariablesAndStartListening</span>(<span class="tok-type">Story</span> story)
    {
        <span class="tok-fn">SyncVariablesToStory</span>(story);
        story.variablesState.variableChangedEvent += <span class="tok-fn">UpdateVariableState</span>;
    }

    <span class="tok-kw">public void</span> <span class="tok-fn">StopListening</span>(<span class="tok-type">Story</span> story) =&gt;
        story.variablesState.variableChangedEvent -= <span class="tok-fn">UpdateVariableState</span>;

    <span class="tok-kw">public void</span> <span class="tok-fn">UpdateVariableState</span>(<span class="tok-kw">string</span> name, Ink.Runtime.<span class="tok-type">Object</span> value)
    {
        <span class="tok-kw">if</span> (variables.<span class="tok-fn">ContainsKey</span>(name)) variables[name] = value;
    }

    <span class="tok-kw">private void</span> <span class="tok-fn">SyncVariablesToStory</span>(<span class="tok-type">Story</span> story)
    {
        <span class="tok-kw">foreach</span> (<span class="tok-type">KeyValuePair</span>&lt;<span class="tok-kw">string</span>, Ink.Runtime.<span class="tok-type">Object</span>&gt; variable <span class="tok-kw">in</span> variables)
            story.variablesState.<span class="tok-fn">SetGlobal</span>(variable.Key, variable.Value);
    }
}`,
          },
        ],
      },
      {
        name: 'Event Bus & Input State Machine',
        desc: 'Central event bus - no direct references between systems. Input state machine keeps one action map active at a time; no conflicting inputs.',
        details: [
          'gameEventsManager singleton - holds typed event channel objects (DialogueEvents, InputEvents, SelectionEvents); all wiring uses C# events, not Unity message passing',
          'Zero coupling - CarController subscribes to InputEvents; CameraManager subscribes to DialogueEvents and SelectionEvents; neither knows the other exists',
          'InputStateManager - on state change, explicitly enables one action map (Car / Dialogue / Selection) and disables the others',
          'State broadcast - any system can trigger a state change; all listeners react independently, including the car controller stopping physics and the camera switching',
        ],
        codeBlocks: [
          {
            filename: 'gameEventsManager.cs - event bus',
            lang: 'C#',
            code: `<span class="tok-comment">// Single scene-wide singleton that owns all typed event channels.</span>
<span class="tok-comment">// Systems subscribe to whichever channels they care about -</span>
<span class="tok-comment">// no direct references between them, no FindObjectOfType calls.</span>
<span class="tok-kw">public class</span> <span class="tok-type">gameEventsManager</span> : <span class="tok-type">MonoBehaviour</span>
{
    <span class="tok-kw">public static</span> <span class="tok-type">gameEventsManager</span> instance { <span class="tok-kw">get</span>; <span class="tok-kw">private set</span>; }

    <span class="tok-kw">public</span> <span class="tok-type">DialogueEvents</span>  dialogueEvents;
    <span class="tok-kw">public</span> <span class="tok-type">InputEvents</span>     inputEvents;
    <span class="tok-kw">public</span> <span class="tok-type">SelectionEvents</span> selectionEvents;
    <span class="tok-kw">public</span> <span class="tok-type">CarInputAction</span>  inputActions;

    <span class="tok-kw">private void</span> <span class="tok-fn">Awake</span>()
    {
        <span class="tok-kw">if</span> (instance != <span class="tok-kw">null</span>) { <span class="tok-type">Debug</span>.<span class="tok-fn">LogError</span>(<span class="tok-str">"Duplicate GameEventsManager!"</span>); <span class="tok-kw">return</span>; }
        instance        = <span class="tok-kw">this</span>;
        inputActions    = <span class="tok-kw">new</span> <span class="tok-type">CarInputAction</span>();
        dialogueEvents  = <span class="tok-kw">new</span> <span class="tok-type">DialogueEvents</span>();
        inputEvents     = <span class="tok-kw">new</span> <span class="tok-type">InputEvents</span>();
        selectionEvents = <span class="tok-kw">new</span> <span class="tok-type">SelectionEvents</span>();
    }
}`,
          },
        ],
      },
    ],
    takeaways: [
      'Vehicle physics from first principles - grip circle, weight transfer, Hooke\'s law. Not approximated.',
      'SurfaceType ScriptableObjects - physics tuning without code changes.',
      'Event bus - systems never reference each other directly.',
      'Story is a first-class system - Ink state persists, cameras switch on knots.',
    ],
  },
]

export function getProject(id) {
  return projects.find(p => p.id === id)
}
