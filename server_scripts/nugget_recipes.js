ServerEvents.recipes(e => {
    let re = e.recipes.create_hand_made
    e.remove('create:brass_nugget')
    re.tool_recipe('create_hand_made:press_hammer', 'create:iron_sheet', '8x create:brass_nugget')
    e.remove('create:copper_nugget')
    re.tool_recipe('create_hand_made:press_hammer', 'create:golden_sheet', '8x create:copper_nugget')
    e.remove('create:zinc_nugget')
    re.tool_recipe('create_hand_made:press_hammer', 'create:zinc_ingot', '8x create:zinc_nugget')
    e.remove('minecraft:gold_nugget')
    re.tool_recipe('create_hand_made:press_hammer', 'create:copper_sheet', '8x minecraft:gold_nugget')
    e.remove('minecraft:iron_nugget')
    re.tool_recipe('create_hand_made:press_hammer', 'create:brass_sheet', '8x minecraft:iron_nugget')
})
