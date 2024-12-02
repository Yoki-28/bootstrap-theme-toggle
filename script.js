const btn_elm = document.getElementById("btn-id");
const theme = document.getElementById('bi');
const body = document.body;

btn_elm.addEventListener('click',function()
{
    body.classList.toggle('dark-theme');
    btn_state();

    const isDarkMode = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

function btn_state()
{
    if(body.classList.contains('dark-theme'))
    {
        btn_elm.textContent = "Switch to Light Theme";
        btn_elm.classList.remove('bg-dark', 'text-white');
        btn_elm.classList.add('bg-light', 'text-dark');
        theme.classList.remove('bi-brightness-high-fill');
        theme.classList.add('bi-moon-fill');
    }
    else
    {
        btn_elm.textContent = "Switch to Dark Theme";
        btn_elm.classList.remove('bg-light', 'text-dark');
        btn_elm.classList.add('bg-dark', 'text-light');  
        theme.classList.remove('bi-moon-fill');
        theme.classList.add('bi-brightness-high-fill');
    }
};

function check_theme()
{
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark')
    {
        body.classList.add('dark-theme');   
    }
    btn_state();
}
check_theme();