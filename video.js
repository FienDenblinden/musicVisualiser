const {
    render
} = require('@nexrender/core');

let job = {
    template: {
        src: "file:///C:/Users/INC/Desktop/MusicVisualiser.aep",
        composition: 'Main',
        frameIncrement: 5,
    },
    assets: [{
            type: "data",
            layerName: "Text",
            property: "Source Text",
            value: "Fien Denblinden"
        },
        {
            src: "file:///C:/Users/INC/Desktop/backgroundImage2.jpg",
            type: "image",
            layerName: "Background"
        }
    ],


};

const main = async () => {
    const result = await render(job, {
        skipCleanup: true
    });
};

main().catch(console.error);