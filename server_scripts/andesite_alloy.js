ServerEvents.recipes(e => {
    e.remove({output: "create:andesite_alloy"})
    let create = e.recipes.create
    create.mixing(
        [Fluid.of("kubejs:smelted_andesite", 250),
            Fluid.of("minecraft:lava", 750)],
        Item.of("minecraft:andesite")
    ).superheated()
})