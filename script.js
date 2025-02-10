// Homepage Background Scroll Animation

const scrollingBackground = document.querySelectorAll(".background-scroll");

const backgroundIcons = [
    {
        name: 'directSelect', 
        data: 'assets/svgs/background/direct-selection-tool.svg'
    },
    {
        name: 'eraser', 
        data: 'assets/svgs/background/eraser.svg'
    },
    {
        name: 'eyedrop', 
        data: 'assets/svgs/background/eyedropper.svg'
    },
    {
        name: 'paintbrush', 
        data: 'assets/svgs/background/paintbrush.svg'
    },
    {
        name: 'pentool', 
        data: 'assets/svgs/background/pentool.svg'
    },
];

backgroundIcons.forEach(icon => {
    scrollingBackground.appendChild(icon);
})




