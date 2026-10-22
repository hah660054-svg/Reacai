document.addEventListener('DOMContentLoaded', () => {
    // 1. TeamControl Intro Animation Timeout (3 စက္ကန့်အကြာတွင် Intro ဖျောက်မည်)
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 800);
    }, 3000);

    // 2. Bottom Navigation Tabs Switch Function
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Active Class များ ဖယ်ထုတ်မည်
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            // နှိပ်လိုက်သော Tab ကို Active လုပ်မည်
            item.classList.add('active');
            const selectedTabId = item.getAttribute('data-tab');
            document.getElementById(selectedTabId).classList.add('active');
        });
    });
});

// Recipe သိမ်းဆည်းသည့် Function
function saveRecipe(title) {
    alert('"' + title + '" ကို Saved ဖိုင်ထဲသို့ သိမ်းဆည်းပြီးပါပြီ။');
}
