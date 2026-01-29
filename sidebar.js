const sidebarHTML = `
<div id="mySidenav" class="side-menu">
    <a href="javascript:void(0)" class="close-btn" onclick="closeNav()">&times;</a>
    <a href="index.html">🏠 Dashboard</a>
    
    <a href="notes.html">💜 Secret Notes</a>
    <a href="study.html">🌻 Study Plan</a> <a href="routine.html">📅 Routine</a>
    <a href="quiz.html">📝 Quiz</a>
    <a href="assignment.html">📂 Assignments</a>
    <a href="mid.html">📖 Mid Term</a>
    <a href="final.html">🎓 Final Exam</a>
</div>
`;

// Inject the sidebar into the page
document.getElementById("sidebar-placeholder").innerHTML = sidebarHTML;
