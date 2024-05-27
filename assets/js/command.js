// 获取所有输入元素和结果框元素
const monsterSelect1 = document.getElementById('monsterSelect1');
const stageSelect1 = document.getElementById('stageSelect1');
const quantityInput1 = document.getElementById('quantityInput1');
const levelInput1 = document.getElementById('levelInput1');
const radiusInput1 = document.getElementById('radiusInput1');
const commandBox1 = document.getElementById('commandBox1');

const monsterSelect2 = document.getElementById('monsterSelect2');
const stageSelect2 = document.getElementById('stageSelect2');
const quantityInput2 = document.getElementById('quantityInput2');
const levelInput2 = document.getElementById('levelInput2');
const radiusInput2 = document.getElementById('radiusInput2');
const commandBox2 = document.getElementById('commandBox2');

const monsterSelect3 = document.getElementById('monsterSelect3');
const stageSelect3 = document.getElementById('stageSelect3');
const stageSelect4 = document.getElementById('stageSelect4');
const stageSelect5 = document.getElementById('stageSelect5');
const stageSelect6 = document.getElementById('stageSelect6');
const stageSelect7 = document.getElementById('stageSelect7');
const stageSelect8 = document.getElementById('stageSelect8');
const quantityInput3 = document.getElementById('quantityInput3');
const levelInput3 = document.getElementById('levelInput3');
const radiusInput3 = document.getElementById('radiusInput3');
const commandBox3 = document.getElementById('commandBox3');

// 监听输入元素的更改事件
monsterSelect1.addEventListener('change', updateCommand1);
stageSelect1.addEventListener('change', updateCommand1);
quantityInput1.addEventListener('input', updateCommand1);
levelInput1.addEventListener('input', updateCommand1);
radiusInput1.addEventListener('input', updateCommand1);

monsterSelect2.addEventListener('change', updateCommand2);
stageSelect2.addEventListener('change', updateCommand2);
quantityInput2.addEventListener('input', updateCommand2);
levelInput2.addEventListener('input', updateCommand2);
radiusInput2.addEventListener('input', updateCommand2);

monsterSelect3.addEventListener('change', updateCommand3);
stageSelect3.addEventListener('change', updateCommand3);
stageSelect4.addEventListener('change', updateCommand3);
stageSelect5.addEventListener('change', updateCommand3);
stageSelect6.addEventListener('change', updateCommand3);
stageSelect7.addEventListener('change', updateCommand3);
stageSelect8.addEventListener('change', updateCommand3);
quantityInput3.addEventListener('input', updateCommand3);
levelInput3.addEventListener('input', updateCommand3);
radiusInput3.addEventListener('input', updateCommand3);

// 更新结果框中的指令
function updateCommand1() {
    const selectedMonster1 = monsterSelect1.value;
    const selectedStage1 = stageSelect1.value;
    const quantity1 = quantityInput1.value;
    const level1 = levelInput1.value;
    const radius1 = radiusInput1.value;

    if (selectedMonster1 && selectedStage1 && quantity1 && level1 && radius1) {
        const command = `/spawn ${selectedMonster1} s${selectedStage1} x${quantity1} lv${level1} r${radius1}`;
        commandBox1.value = command;
    } else {
        commandBox1.value = '';
    }
}

function updateCommand2() {
    const selectedMonster2 = monsterSelect2.value;
    const selectedStage2 = stageSelect2.value;
    const quantity2 = quantityInput2.value;
    const level2 = levelInput2.value;
    const radius2 = radiusInput2.value;

    if (selectedMonster2 && selectedStage2 && quantity2 && level2 && radius2) {
        const command = `/spawn ${selectedMonster2} ${selectedMonster2} x${quantity2} lv${level2} r${radius2}`;
        commandBox2.value = command;
    } else {
        commandBox2.value = '';
    }
}

function updateCommand3() {
    const selectedMonster3 = monsterSelect3.value;
    const selectedStage3 = stageSelect3.value;
    const selectedStage4 = stageSelect4.value;
    const selectedStage5 = stageSelect5.value;
    const selectedStage6 = stageSelect6.value;
    const selectedStage7 = stageSelect7.value;
    const selectedStage8 = stageSelect8.value;
    const quantity3 = quantityInput3.value;
    const level3 = levelInput3.value;
    const radius3 = radiusInput3.value;

    const stageIds = [selectedStage3, selectedStage4, selectedStage5, selectedStage6, selectedStage7, selectedStage8].filter(id => id !== '');

    if (selectedMonster3 && stageIds.length > 0 && quantity3 && level3 && radius3) {
        const command = `/spawn ${selectedMonster3} x${quantity3} lv${level3} r${radius3} ${selectedStage3} ${selectedStage4} ${selectedStage5} ${selectedStage6} ${selectedStage7} ${selectedStage8}`;
        commandBox3.value = command;
    } else {
        commandBox3.value = '';
    }
}

// 初始化结果框为空
commandBox1.value = '';
commandBox2.value = '';
commandBox3.value = '';

// 复制指令功能
document.getElementById('copyButton1').addEventListener('click', () => {
    commandBox1.select();
    document.execCommand('copy');
    alert('指令已复制到剪贴板！');
});
document.getElementById('copyButton2').addEventListener('click', () => {
    commandBox2.select();
    document.execCommand('copy');
    alert('指令已复制到剪贴板！');
});
document.getElementById('copyButton3').addEventListener('click', () => {
    commandBox3.select();
    document.execCommand('copy');
    alert('指令已复制到剪贴板！');
});