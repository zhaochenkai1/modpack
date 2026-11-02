ServerEvents.recipes(e => {
    e.remove({output : 'create_hand_made:crusher_mortar'})
    e.remove({output : 'create_hand_made:mortar'})

    e.remove({output : 'create_hand_made:pointer'})
    e.shaped('create_hand_made:pointer',
        [' EB', ' SE', 'S  ']
    , {
        'E': 'create:electron_tube',
        'B': 'create:brass_hand',
        'S': 'minecraft:stick'
    }).id('kubejs:handmade_pointer')
})