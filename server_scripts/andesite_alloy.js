ServerEvents.recipes(e => {
    e.remove({output: "create:andesite_alloy"})
    let create = e.recipes.create
    create.mixing(
        [Fluid.of("kubejs:smelted_andesite", 250),
            Fluid.of("minecraft:lava", 750)],
        Item.of("minecraft:andesite")
    ).superheated()

    create.mixing([
            Item.of("create:andesite_alloy"),
            CreateItem.of(Item.of("create:andesite_alloy"), 0.75)
        ],
        [
            Fluid.of("kubejs:smelted_andesite", 500),
            Item.of("create:zinc_nugget", 2)
        ]
    )
})