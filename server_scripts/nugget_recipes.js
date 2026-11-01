ServerEvents.recipes(e => {
    let re = e.recipes.create_hand_made
    e.remove({output:'create:brass_nugget'})
    re.tool_recipe('press_hammer_depot', '8x minecraft:iron_nugget', 'create:iron_sheet')
    e.remove({output:'create:copper_nugget'})
    re.tool_recipe('press_hammer_depot', '8x create:brass_nugget', 'create:golden_sheet')
    e.remove({output:'create:zinc_nugget'})
    re.tool_recipe('press_hammer_depot', '8x create:copper_nugget', 'create:zinc_ingot')
    e.remove({output:'minecraft:gold_nugget'})
    re.tool_recipe('press_hammer_depot', '8x create:zinc_nugget', 'create:copper_sheet')
    e.remove({output:'minecraft:iron_nugget'})
    re.tool_recipe('press_hammer_depot', '8x minecraft:gold_nugget', 'create:brass_sheet')
})
