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




    create.milling([
            "kubejs:crushed_andesite",
            CreateItem.of("minecraft:cobblestone", 0.75)
        ],
        Item.of("minecraft:andesite")
    )

    create.crushing([
            Item.od("kubejs:crushed_andesite", 2),
            CreateItem.of("minecraft:cobblestone", 0.25)
        ],
        Item.of("minecraft:andesite")
    )
})