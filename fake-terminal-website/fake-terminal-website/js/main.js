// Password protection logic
const validPasswords = [
    'VERMIS TENEBRIS',
    'OPERATION VERMIS TENEBRIS',
    'OPERATION ABYSSAL CHRONICLE',
    'ABYSSAL CHRONICLE',
    'THE BLACK BOX',
    'BLACK BOX',
    'MIRINOV',
    'THE MIRINOV OBJECT',
    'MIRINOV OBJECT'
];
const passwordScreen = document.getElementById('password-screen');
const terminal = document.getElementById('terminal');
const passwordInput = document.getElementById('password-input');
const submitPassword = document.getElementById('submit-password');
const passwordError = document.getElementById('password-error');

submitPassword.addEventListener('click', () => {
    const enteredPassword = passwordInput.value.toUpperCase().trim(); // Make case-insensitive
    if (validPasswords.includes(enteredPassword)) {
        passwordScreen.style.display = 'none'; // Hide password screen
        terminal.style.display = 'block'; // Show terminal
    } else {
        passwordError.textContent = 'Invalid Password. Please try again.';
    }
});

// Terminal functionality
function showContent(file) {
    const contentDiv = document.getElementById('file-content');
    const fileList = document.querySelectorAll('#file-list li');
    fileList.forEach((item) => item.classList.remove('active'));

    document.querySelector(`li[onclick="showContent('${file}')"]`).classList.add('active');

    let content = '';
    switch (file) {
        case 'readme':
            content = `
                <h2>README.MD</h2>
                <p>
                    <strong>PISCES Access Terminal</strong><br>
                    Property of the Paranormal Intelligence Section for Counterintelligence, Espionage, and Sabotage (PISCES).<br>
                    Unauthorized access is punishable under the Official Secrets Act (1989).
                </p>
                <p>
                    You are accessing compartmentalized files for Operation Abyssal Chronicle.
                    Please ensure all accessed materials remain <strong>classified</strong>.
                </p>
            `;
            break;
        case 'lablogs':
            content = `
                <h2>LAB-LOGS.txt</h2>
                <pre>
[???-??-????]
Artifact resonance spikes detected. Internal logs corrupted.

[???-??-????]
Team Lead Dr. Jackson murmured: 
"They're here. I think I understand it now. They're always here."
Staff advised observation protocols.

[???-??-????]
Artifact induces auditory hallucinations. 
Example reported: "Low-frequency whispers originating internally."

[???-??-????]
Instrumentation error: artifact spectrometer readings 
exceed known energy thresholds.

[???-??-????]
Dr. Jackson made unauthorized artifact removal attempt. 
Claims internal security audit. Big Brother protocol enacted.

[???-??-????]
Artifact remains unaffected by conventional containment procedures. 
Internal geometry described as "impossible."

[???-??-????]
Spontaneous EM pulses observed. Duration: 4.7 seconds. 
Side effects: total blackout of surrounding devices.

[???-??-????]
Lab personnel express collective unease. 
Phrases such as "It's been watching us even before we were hired..." 
recorded during emergency-debriefing.

[???-??-????]
Physical contact experiments terminated indefinitely. 
Observations include dizziness, visual geometric disturbances, 
and telepathic echoes.

[???-??-????]
Dr. Jackson absconded with artifact. Artifact status: Unsecured.

[???-??-????]
Evidence suggests correlation between artifact and The Mirinov Object. 
Cross-referencing ongoing.
                </pre>
            `;
            break;
        case 'briefing':
            content = `
                <h2>Abyssal Chronicle Briefing Documents</h2>
                <p style="color: red; font-weight: bold; text-align: center;">
                    WARNING: The materials in this briefing are classified. Do not share with our mates in THE PROGRAM.
                </p>
                <div style="border: 1px solid #00FF41; padding: 10px; margin-top: 10px; overflow-y: auto; max-height: 75vh;">
                    <h3 style="text-align: center;">PISCES Briefing Document</h3>
                    <p><strong>Classification:</strong> Top Secret - Eyes Only</p>
                    <p><strong>Date:</strong> REDACTED</p>
                    <p><strong>Prepared for:</strong> Director of PISCES</p>
                    <p>Operation Abyssal Chronicle was greenlit following the identification of an emergent, high-priority 
                    threat involving an anomalous artifact designated <strong>The Black Box</strong>. Originally retrieved 
                    during a routine PISCES-adjacent mission in Egypt, the artifact has demonstrated verified telepathic 
                    capabilities, including the unsolicited initiation of sustained mental communication with Dr. Elijah 
                    Jackson, newly assigned as Team Lead, Science Division.
                    </p>
                    <p>
                    Dr. Jackson's psychological profile indicated a moderate risk for susceptibility to cognitive influence, 
                    but no prior indicators suggested active subversion. This incident triggered an immediate escalation 
                    to containment protocols under Tier-1 Threat Guidelines.
                    </p>
                    <p>
                    Initial alarm was raised when Dr. Jackson was identified covertly relocating <strong>The Black Box</strong> 
                    from its containment site to his private residence. Surveillance logs confirm unauthorized access and 
                    removal occurred over a 72-hour window, culminating in a confirmed breach at REDACTED hours on REDACTED.
                    </p>
                    <p>
                    Upon breach of Dr. Jackson's residential location at REDACTED, Group 13 operatives initiated contact 
                    with an unknown female occupant. Subsequent biometric analysis identified the individual as Emily Carter, 
                    Dr. Jackson's fiancée. Ms. Carter was neutralized under the presumption of target identity.
                    </p>
                    <p>
                    Post-event, forensics and situational evidence strongly indicate that Dr. Jackson fled the scene with 
                    his minor daughter, Samantha Jackson, and <strong>The Black Box</strong>. Their current whereabouts were 
                    initially undetermined. However, PISCES’s proprietary surveillance network, utilizing REDACTED systems 
                    from Group 13 and REDACTED external assets, has uncovered actionable intelligence placing Dr. Jackson 
                    and his daughter in Russia.
                    </p>
                </div>
            `;
            break;
        case 'schematic':
            content = `
                <h2>ARTIFACT SCHEMATIC [SPECTROMETER]</h2>
                <p>Visualizations of The Black Box:</p>
                <img src="./img/The Black Box Imaging 1of2.jpg" alt="Artifact Image 1">
                <img src="./img/The Black Box Imaging 2of2.jpg" alt="Artifact Image 2">
                <p><strong>Five-Dimensional Containment Field Test Footage: Spectographic</strong></p>
                <video controls width="600">
                    <source src="./media/Mass Spectrometer.MP4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            break;
        default:
            content = '<p>Unknown file.</p>';
    }

    contentDiv.innerHTML = content;
}
