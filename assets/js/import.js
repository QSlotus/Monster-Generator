// 页面加载完成后，执行JavaScript代码
document.addEventListener('DOMContentLoaded', function() {
    // 加载局外显示怪物的JSON数据
    fetch('./data/monster.json')
    .then(response => response.json())
    .then(data => {
    // 动态插入局外显示怪物的选项
    data.forEach(monster => {
    const option = document.createElement('option');
    option.value = monster.value;
    option.textContent = monster.label;
    document.getElementById('monsterSelect').appendChild(option);
    });
    });
    // 加载局内显示怪物的JSON数据
    fetch('./data/stage.json')
    .then(response => response.json())
    .then(data => {
    // 动态插入局内显示怪物的选项
    data.forEach(stage => {
    const option = document.createElement('option');
    option.value = stage.value;
    option.textContent = stage.label;
    document.getElementById('stageSelect').appendChild(option);
    });
    });
    });

