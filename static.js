import masterRoom from "../rooms/master.js";

let sphere1 = [{
        name: 'masterRoom',
        key: 'a',
        rotation: Math.PI / 4,
        img: masterRoom.key1,
        position: {
            x: 0,
            z: 0
        }
    },
    {
        name: 'masterRoom',
        key: 'b',
        rotation: Math.PI / 6,
        img: masterRoom.key2,
        position: {
            x: 2,
            z: 2
        }
    },
    {
        name: 'masterRoom',
        key: 'c',
        rotation: Math.PI / 4,
        img: masterRoom.key3,
        position: {
            x: 2,
            z: 0
        }
    },
    {
        name: 'masterRoom',
        key: 'd',
        rotation: Math.PI / 4,
        img: masterRoom.key4,
        position: {
            x: 0,
            z: 2
        }
    },
    {
        name: 'masterRoom',
        key: 'e',
        rotation: Math.PI / 4,
        img: masterRoom.key5,
        position: {
            x: 2,
            z: 1
        }

    }
]

export default sphere1;