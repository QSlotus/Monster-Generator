document.getElementById('pairButton').addEventListener('click', () => {
    const selectedMonster = document.getElementById('monsterSelect').value;
    const selectedStage = document.getElementById('stageSelect').value;
    const quantity = document.getElementById('quantityInput').value;
    const level = document.getElementById('levelInput').value;
    const radius = document.getElementById('radiusInput').value;
    
    if (selectedMonster && selectedStage && quantity && level && radius) {
    const command = `/spawn ${selectedMonster} s${selectedStage} x${quantity} lv${level} r${radius}`;
    document.getElementById('commandBox').value = command;
    } else {
    document.getElementById('commandBox').value = '';
    alert('请选择怪物并填写所有参数来生成指令。');
    }
    });

document.getElementById('copyButton').addEventListener('click', () => {
    const commandBox = document.getElementById('commandBox');
    commandBox.select();
    document.execCommand('copy');
    alert('指令已复制到剪贴板！');
});
