ServerEvents.recipes(e => {
    let mine = e.recipes.minecraft

    e.remove({output : 'create_hand_made:crusher_mortar'})
    e.remove({output : 'create_hand_made:mortar'})

    e.remove({output : 'create_hand_made:pointer'})
    mine.crafting_shaped('create_hand_made:pointer',
        [' EB', ' SE', 'S  ']
    , {
        'E': 'create:electron_tube',
        'B': 'create:brass_hand',
        'S': 'minecraft:stick'
    }).id('kubejs:handmade_pointer')
})