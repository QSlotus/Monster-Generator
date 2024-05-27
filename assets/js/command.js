// 获取所有输入元素和结果框元素
const monsterSelect = document.getElementById('monsterSelect');
const stageSelect = document.getElementById('stageSelect');
const quantityInput = document.getElementById('quantityInput');
const levelInput = document.getElementById('levelInput');
const radiusInput = document.getElementById('radiusInput');
const commandBox = document.getElementById('commandBox');

// 监听输入元素的更改事件
monsterSelect.addEventListener('change', updateCommand);
stageSelect.addEventListener('change', updateCommand);
quantityInput.addEventListener('input', updateCommand);
levelInput.addEventListener('input', updateCommand);
radiusInput.addEventListener('input', updateCommand);

// 更新结果框中的指令
function updateCommand() {
    const selectedMonster = monsterSelect.value;
    const selectedStage = stageSelect.value;
    const quantity = quantityInput.value;
    const level = levelInput.value;
    const radius = radiusInput.value;

    if (selectedMonster && selectedStage && quantity && level && radius) {
        const command = `/spawn ${selectedMonster} s${selectedStage} x${quantity} lv${level} r${radius}`;
        commandBox.value = command;
    } else {
        commandBox.value = '';
    }
}

// 初始化结果框为空
commandBox.value = '';

// 复制指令功能
document.getElementById('copyButton').addEventListener('click', () => {
    commandBox.select();
    document.execCommand('copy');
    alert('指令已复制到剪贴板！');
});