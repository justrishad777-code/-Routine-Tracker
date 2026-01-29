const navbarHTML = `
<div class="menu-container">
    <a href="notes.html" class="menu-card" style="border-left: 5px solid #ab47bc;">
        <span class="card-title">💜 Secret Notes</span><span class="card-icon">📝</span>
    </a>

    <a href="study.html" class="menu-card" style="border-left: 5px solid #fbc02d;">
        <span class="card-title">🌻 Study Plan</span><span class="card-icon">📚</span>
    </a>

    <a href="routine.html" class="menu-card routine">
        <span class="card-title">📅 Daily Routine</span><span class="card-icon">🌸</span>
    </a>
    <a href="quiz.html" class="menu-card quiz">
        <span class="card-title">📝 Quiz Schedule</span><span class="card-icon">🌿</span>
    </a>
    <a href="assignment.html" class="menu-card assign">
        <span class="card-title">📂 Assignments</span><span class="card-icon">💙</span>
    </a>
    <a href="mid.html" class="menu-card mid">
        <span class="card-title">📖 Mid Term Exam</span><span class="card-icon">💜</span>
    </a>
    <a href="final.html" class="menu-card final">
        <span class="card-title">🎓 Final Exam</span><span class="card-icon">❤️</span>
    </a>
</div>
`;

// Inject the navbar into the page
document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
