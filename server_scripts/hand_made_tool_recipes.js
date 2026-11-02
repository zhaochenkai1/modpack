ServerEvents.recipes(e => {
    let mine = e.recipes.minecraft

    e.remove('create_hand_made:crusher_mortar')
    e.remove('create_hand_made:mortar')

    e.remove({output : 'create_hand_made:pointer'})
    mine.crafting_shaped('create_hand_made:pointer', [
        ['', 'ET', 'BS'],
        ['', 'S', 'ET'],
        ['S', '', '']
    ], {
        'ET': 'create:electron_tube',
        'BS': 'create:brass_hand',
        'S': 'minecraft:stick'
    })
})