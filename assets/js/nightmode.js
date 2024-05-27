// 获取夜间模式选项单选按钮
const modeOptions = document.querySelectorAll('input[name="modeOption"]');

// 在页面加载完成后切换模式
window.onload = function() {
    const isNightMode = modeOptions[0].checked;
    document.body.classList.toggle('night-mode', isNightMode);
}

// 监听夜间模式选项的变化
modeOptions.forEach(option => {
    option.addEventListener('change', () => {
        isNightMode = (option.value === 'auto-night');
        document.body.classList.toggle('night-mode', isNightMode);
    });
});