/**
 * CoraTO | Command Center V22 - Database
 * Made for cora-to.com Trickster Online
 * Credits: Spooki and Mewsie
 * "Vibecoded" - Free to use & reverse engineer.
 */
const MINDS_EYE_ICON = `<img src="img/Mind's_Eye.jpg" style="width:20px; vertical-align:middle; border-radius:4px; margin-left:5px;" title="Requires Mind's Eye">`;

const NORMAL_QUESTS = {
    "Coral Beach (Lv 20)": {
        q: "Indiana John",
        req: "Lv 20",
        r: "2x Crystal",
        r_img: "Crystal.gif",
        npc_img: "npcs/Indiana_John.gif",
        loc_img: "img/locations/normal/BlomingIndiana.png",
        mobs: [],
        rewards: "1x Daily Coupon, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Desert Beach (Lv 20)": {
        q: "Monkey_T",
        req: "Lv 20",
        r: "1x Sleeping Socks",
        r_img: "Luxury_Socks.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/normal/DesertMonkey.png",
        mobs: [{ n: "Punisher Cannonshell", l: "Desert Fields 1-4", img: "Cannon_Shell.gif" }],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Megalopolis (Lv 35)": {
        q: "Stargazer Stella",
        req: "Lv 35, Star Gazer Questline",
        r: "2x Shtella's Profile",
        r_img: "Envelope_with_Photo.gif",
        npc_img: "npcs/Star_Gazer_Stella.gif",
        loc_img: "img/locations/normal/MegaloStella.png",
        mobs: [
            // Desert Beach
            { n: "GenericMobHeader", label: "Desert Beach" },
            { n: "Golden Mole", l: "Desert Field 1", img: "Mole_gif.gif" },
            { n: "Fanta Slime", l: "Desert Field 1", img: "Fanta_Slime.gif" },
            { n: "Shell Trap", l: "Desert Field 1", img: "Shell_Trap_gif.gif" },
            { n: "Fanta Fish", l: "Desert Field 2", img: "Fanta_Fish_gif.gif" },
            { n: "Hula Octopus", l: "Desert Field 2", img: "Octopus.gif" },
            { n: "Grumpy Octopus", l: "Desert Field 2", img: "Octopus.gif" },
            { n: "Sea Scorpion", l: "Desert Field 3", img: "Sea_Scorpion.gif" },
            { n: "Pineapple", l: "Desert Field 3", img: "Pineapple_gif.gif" },
            { n: "Sand Demon", l: "Desert Field 3", img: "Sand_Demon_gif.gif" },
            { n: "Fan Lizard", l: "Desert Field 4", img: "Fan_Lizard_gif.gif" },
            { n: "Cannon Shell", l: "Desert Field 4", img: "Cannon_Shell.gif" },

            // Caballa
            { n: "GenericMobHeader", label: "Caballa Relics" },
            { n: "Leaf Bird", l: "Path", img: "Leaf_Bird.gif" },
            { n: "Mandragora", l: "Path, Relics 1", img: "Mandragora_gif.gif" },
            { n: "Stone Soldier", l: "Relics 1, 2", img: "Stone_Soldier.gif" },
            { n: "Aposis", l: "Relics 3, 4", img: "Aposis.gif" },
            { n: "Mimic", l: "Relics 2, 3, 4", img: "Mimic.gif" },

            // Oops Warf
            { n: "GenericMobHeader", label: "Oops Wharf" },
            { n: "Ironclad Turtle", l: "Path", img: "Ironclad_Turtle.gif" },
            { n: "Sea Tiger", l: "Path", img: "Sea_Tiger_gif.gif" },
            { n: "Requi", l: "Wharf 1, 2, 3", img: "Requi.gif" },
            { n: "Quiem", l: "Wharf 1, 3", img: "Quiem.gif" },
            { n: "Crow", l: "Wharf 2, 3", img: "Crow.gif" },
            { n: "Black Foe", l: "Wharf 4", img: "Black_Foe.gif" },
            { n: "Master Foe", l: "Wharf 4", img: "Master_Foe.gif" }
        ],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Caballa (Lv 50)": {
        q: "Pharoah Boy",
        req: "Lv 50",
        r: "1x Staff of Purification",
        r_img: "Aposis'_Stick.gif",
        npc_img: "npcs/Pharaoh_Boy.gif",
        loc_img: "img/locations/normal/AztecaPhara.png",
        mobs: [{ n: "Punisher Aposis", l: "Relics Fields 1-4", img: "Aposis.gif" }],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Oops Warf (Lv 65)": {
        q: "Marinel",
        req: "Lv 65",
        r: "2x Thick Rope",
        r_img: "Thick_Rope.gif",
        npc_img: "npcs/Marinel.gif",
        loc_img: "img/locations/normal/OopsMarine.png",
        mobs: [],
        rewards: "1x Daily Coupon, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Mermaid Palace (Lv 80)": {
        q: "Entertainer Elicia",
        req: "Lv 80",
        r: "2x Executioner's Gills",
        r_img: "Merrow's_Gills.gif",
        npc_img: "npcs/Entertainer_Elicia.gif",
        loc_img: "img/locations/normal/MermaidElicia.png",
        mobs: [{ n: "Punisher Merman Ale", l: "Mermaid Fields 1-4", img: "Merman_Ale.gif" }],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Ghost Blue (Lv 100)": {
        q: "Stargazer Stella",
        req: "Lv 100, Star Gazer Questline",
        r: "2x Stela's Profile",
        r_img: "Envelope_with_Photo (1).gif",
        npc_img: "npcs/Star_Gazer_Stella.gif",
        loc_img: "img/locations/normal/GhostBStella.png",
        mobs: [
            { n: "GenericMobHeader", label: "Mermaid Palace" },
            { n: "Super Golden Mole", l: "Path 1", img: "Mole.gif" },
            { n: "Cone Stone", l: "Path 1, 2", img: "Cone_Stone.gif" },
            { n: "Pirate Boxer B", l: "Path 2", img: "Pirate_Boxer.gif" },
            { n: "Mermaid Little", l: "Mermaid 1, 2", img: "Mermaid_Little.gif" },
            { n: "Fish Guardian Tink", l: "Mermaid 2, 3", img: "Fish_Guardian_Tink.gif" },
            { n: "Fish Guardian Bell", l: "Mermaid 2, 3", img: "Fish_Guardian_Bell.gif" },
            { n: "Waterweed Witch", l: "Mermaid 3", img: "Siremaid.gif" },
            { n: "Merman Aqui", l: "Mermaid 4", img: "Merman_Aku.gif" },
            { n: "Merman Ale", l: "Mermaid 4", img: "Merman_Ale.gif" },

            { n: "GenericMobHeader", label: "Rose Garden" },
            { n: "Dancer Michel", l: "Rose 1", img: "Dancer_Michel.gif" },
            { n: "Dancer Isabelle", l: "Rose 1", img: "Dancer_Isabelle.gif" },
            { n: "Captain Charman", l: "Rose 2", img: "Captain_Charman.gif" },
            { n: "Captain Arman", l: "Rose 2", img: "Captain_Arman.gif" },
            { n: "Captain Norman", l: "Rose 2, 4", img: "Captain_Norman.gif" },
            { n: "Madam Chiffon", l: "Rose 3", img: "Madam_Chiffon.gif" },
            { n: "Madam Moncher", l: "Rose 3", img: "Madam_Moncher.gif" },
            { n: "Madam Fondue", l: "Rose 3, 4", img: "Madam_Fondue.gif" },
            { n: "Beast Vincento", l: "Rose 4", img: "Beast_Vincento.gif" },

            { n: "GenericMobHeader", label: "Black Swamp" },
            { n: "Chocho", l: "Path", img: "Pochi.gif" },
            { n: "Electro Snail", l: "Path, Field 1, 2", img: "Electric_Snail.gif" },
            { n: "Walking Tadpole", l: "Field 1", img: "Walking_Tadpole.gif" },
            { n: "Chameleon Frog", l: "Field 2, 4", img: "Chameleon_Frog.gif" },
            { n: "Mingo", l: "Swamp 3", img: "Mingo.gif" },
            { n: "Monkya", l: "Swamp 3", img: "Monkya.gif" },
            { n: "Swamp Shark", l: "Swamp 3, 5", img: "Swamp_Shark.gif" },
            { n: "Arachne", l: "Field 4, 5, 6", img: "Arachne.gif" },
            { n: "Mud Bigfoot", l: "Field 6", img: "Mud_Bigfoot.gif" }
        ],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Rose Garden (Lv 120)": {
        q: "Homeless Ian",
        req: "Lv 120",
        r: "2x Punisher B.V.'s Claws",
        r_img: "Crow's_Claw.gif",
        npc_img: "npcs/Homeless_Ian.gif",
        loc_img: "img/locations/normal/RoseIan.png",
        mobs: [{ n: "Punisher Beast Vincento", l: "Rose Fields 1-4", img: "Beast_Vincento.gif" }],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Black Swamp (Lv 140)": {
        q: "Hair of Rosetta",
        req: "Lv 140",
        r: "2x Swamp Leaf",
        r_img: "Swamp_Leaf.gif",
        npc_img: "npcs/Hair_of_Rosetta.gif",
        loc_img: "img/locations/normal/BlackSRoset.png",
        mobs: [],
        rewards: "1x Daily Coupon, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Snow Hill (Lv 170)": {
        q: "Winnie",
        req: "Lv 170",
        r: "2x Icicler's Crystal",
        r_img: "Magic_Crystal.gif",
        npc_img: "npcs/Winnie.gif",
        loc_img: "img/locations/normal/SnowWinni.png",
        mobs: [{ n: "Punisher Icicler", l: "Snow Fields 1-4", img: "Icicler.gif" }],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Techichi (Lv 220)": {
        q: "Stargazer Stella",
        req: "Lv 220, Star Gazer Questline",
        r: "2x Stellar's Profile",
        r_img: "Envelope_with_Photo (2).gif",
        npc_img: "npcs/Star_Gazer_Stella.gif",
        loc_img: "img/locations/normal/180px-TechiStella.png",
        mobs: [
            { n: "GenericMobHeader", label: "Techichi" },
            { n: "Fossil Soldier", l: "Path 1", img: "Coal_Soldier.gif" },
            { n: "Roaster", l: "Path 1, 2", img: "Roaster.gif" },
            { n: "Kilimanjaro", l: "Path 2, Field 1", img: "Kilimanjaro.gif" },
            { n: "Laki", l: "Field 1, 2", img: "Laki.gif" },
            { n: "Volcano Laki", l: "Field 1, 2", img: "Laki.gif" },
            { n: "Ponchichi", l: "Field 2, 3", img: "Ponchichi.gif" },
            { n: "Orconio", l: "Field 3", img: "Orconio.gif" },
            { n: "Orpeo", l: "Field 3", img: "Orpeo.gif" },
            { n: "Aabon", l: "Field 4", img: "Aabon.gif" },
            { n: "Dekumanus", l: "Field 4", img: "Dekumanus.gif" },
            { n: "GenericMobHeader", label: "Tapasco Volcano" },
            { n: "Fire Moth", l: "Field 1, 2", img: "Fire_Moth.gif" },
            { n: "Red Salamander", l: "Field 1", img: "Red_Salamander.gif" },
            { n: "Blue Salamander", l: "Field 1", img: "Blue_Salamander.gif" },
            { n: "Funky Orc", l: "Field 2, 3", img: "Funky_Orc.gif" },
            { n: "Regent Orc", l: "Field 2, 3, 4", img: "Regent_Orc.gif" },
            { n: "Fire Golem", l: "Field 2, 4", img: "Fire_Golem.gif" },
            { n: "Reggae Orc", l: "Field 3, 4", img: "Reggae_Orc.gif" }
        ],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    },
    "Tapasco (Lv 270)": {
        q: "Guardian Kerberos",
        req: "Lv 270",
        r: "2x HP Recovery Potion",
        r_img: "img/items/Yeongbi-Chon.gif",
        npc_img: "monsters/Guardian_Kerberos.gif",
        loc_img: "img/locations/normal/TapascoKerberos.png",
        mobs: [{ n: "Punisher Fire Golem", l: "Tapasco Fields 1-4", img: "Fire_Golem.gif" }],
        rewards: "1x Daily Coupon, 100k Galder, 75% 1x Cora Coupon / 25% 3 Bonus Eggs",
        math: { daily_coupon: 1, galder: 100000, cora_coupon: 1, eggs: 3 },
        type: "normal"
    }
};

const SHADOW_STELLA = {
    "Coral Shadow (Lv 180)": {
        q: "Stella", req: "Lv 180, Mind's Eye",
        r: "5x Giant Nail", r_img: "Giant_nail.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_shadow_location_blooming_cora.png",
        mobs: [{ n: "Shadow Tottochi", l: "Coral Field 1", img: "Tottochi_gif.gif" }, { n: "Shadow Clione", l: "Coral Field 3", img: "Clione_gif.gif" }, { n: "Shadow Thiefmon", l: "Coral Field 3", img: "Thiefmon_gif.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Desert Shadow (Lv 195)": {
        q: "Stella", req: "Lv 195, Mind's Eye",
        r: "5x Talisman of Darkness", r_img: "Talisman_of_darkness_icon.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_paradise.png",
        mobs: [{ n: "Shadow Shell Trap", l: "Beach Field 1", img: "Shell_Trap_gif.gif" }, { n: "Shadow Golden Mole", l: "Beach Field 1", img: "Mole_gif.gif" }, { n: "Shadow Fanta Fish", l: "Beach Field 2", img: "Fanta_Fish_gif.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Megalo Shadow (Lv 210)": {
        q: "Stella", req: "Lv 210, Mind's Eye",
        r: "5x Petite Hammer", r_img: "Hammer_item_icon.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_mega_location.png",
        mobs: [{ n: "Shadow Queen Yamu", l: "SE Forest", img: "King_Yamu.gif" }, { n: "Shadow Forest Wasp", l: "SW Forest", img: "Wasp_gif.gif" }, { n: "Shadow Forest Mantis", l: "SW Forest", img: "Mantis_gif.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Caballa Shadow (Lv 225)": {
        q: "Stella", req: "Lv 225, Mind's Eye",
        r: "5x Lock of Hair", r_img: "Lock_of_hair_icon.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_azteca.png",
        mobs: [{ n: "Shadow Mandragora", l: "Relics Field 1", img: "Mandragora_gif.gif" }, { n: "Shadow Aposis", l: "Relics Field 3-4", img: "Aposis.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Oops Shadow (Lv 240)": {
        q: "Stella", req: "Lv 240, Mind's Eye",
        r: "5x Hair Tie", r_img: "Hair_tie_icon.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_oops.png",
        mobs: [{ n: "Shadow Sea Tiger", l: "Path", img: "Sea_Tiger_gif.gif" }, { n: "Shadow Quiem", l: "Field 1, 3", img: "Quiem.gif" }, { n: "Shadow Mermaid Little", l: "Mermaid 1-2", img: "Mermaid_Little.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Ghost Blue Shadow (Lv 255)": {
        q: "Stella", req: "Lv 255, Mind's Eye",
        r: "5x Candle of Shadow", r_img: "Candle_icon.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_aquarius.png",
        mobs: [{ n: "Shadow Plug Bat", l: "Path 1-2", img: "Plug_Bat.gif" }, { n: "Shadow Torpedo Fish", l: "Field 2-3", img: "Torpedo_Fish.gif" }, { n: "Shadow Cora Pyupyu", l: "Field 2-3", img: "Cora_Pyupyu.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Rose Shadow (Lv 270)": {
        q: "Stella", req: "Lv 270, Mind's Eye",
        r: "5x Sharp Needle", r_img: "Needle.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_event_garden.png",
        mobs: [{ n: "Shadow Dancer Isabelle", l: "Rose 1", img: "Dancer_Isabelle.gif" }, { n: "Shadow Captain Charman", l: "Rose 2", img: "Captain_Charman.gif" }, { n: "Shadow Beast Vincento", l: "Rose 4", img: "Beast_Vincento.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Swamp Shadow (Lv 285)": {
        q: "Stella", req: "Lv 285, Mind's Eye",
        r: "5x Shadow Flames", r_img: "Blueflames.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_swamp.png",
        mobs: [{ n: "Shadow Monkya", l: "Swamp 3", img: "Monkya.gif" }, { n: "Shadow Arachne", l: "Swamp 4-6", img: "Arachne.gif" }, { n: "Shadow Mud Bigfoot", l: "Swamp 6", img: "Mud_Bigfoot.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Snow Shadow (Lv 300)": {
        q: "Stella", req: "Lv 300, Mind's Eye",
        r: "5x Voodoo Doll", r_img: "Grass_doll.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_snow_hill.png",
        mobs: [{ n: "Shadow Joker", l: "Prost Forest", img: "Joker.gif" }, { n: "Shadow Goma", l: "Frost Forest", img: "Goma.gif" }, { n: "Shadow Icicler", l: "Snow 4", img: "Icicler.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Techichi Shadow (Lv 315)": {
        q: "Stella", req: "Lv 315, Mind's Eye",
        r: "5x Spell Scroll", r_img: "Redscroll.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_techichi.png",
        mobs: [{ n: "Shadow Roaster", l: "Path", img: "Roaster.gif" }, { n: "Shadow Kilimanjaro", l: "Techichi 1", img: "Kilimanjaro.gif" }, { n: "Shadow Dekumanus", l: "Techichi 4", img: "Dekumanus.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Tapasco Shadow (Lv 330)": {
        q: "Stella", req: "Lv 330, Mind's Eye",
        r: "5x Lost Marble", r_img: "Bluemarble.png",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_tap.png",
        mobs: [{ n: "Shadow Red Salamander", l: "Field 1", img: "Red_Salamander.gif" }, { n: "Shadow Funky Orc", l: "Field 3", img: "Funky_Orc.gif" }, { n: "Shadow Fire Golem", l: "Field 2,4", img: "Fire_Golem.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    },
    "Abyss Shadow (Lv 345)": {
        q: "Stella", req: "Lv 345, Mind's Eye",
        r: "5x Sealing Gem", r_img: "Bluemarble.gif",
        npc_img: "npcs/Stella_auto.gif",
        loc_img: "img/locations/stella/Stella_location_abyss.png",
        mobs: [{ n: "Shadow Ghost Diver", l: "Abyss 1,4", img: "Ghost_Diver.gif" }, { n: "Shadow Channa", l: "Abyss 4", img: "Channa.gif" }],
        rewards: "1x Star Tear EV + 1x Card Pack No.5",
        math: { star_tear: 1, card_pack: 1 },
        type: "stella"
    }
};

const SHADOW_JIA = {
    "Coral Jia (Lv 180)": {
        q: "Shaman Girl Jia", req: "Lv 180, Mind's Eye",
        r: "Hunt Shadow Torobbie, Bad Fury, etc",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-CoralBeach.png",
        mobs: [
            { n: "Shadow Torobbie", l: "lv 180-183; Coral Field 1", img: "Torobbie.gif" },
            { n: "Shadow Bad Fury", l: "lv 184-187; Coral Field 2", img: "Bad_Fury.gif" },
            { n: "Shadow Little Cora", l: "lv 188-191; Coral Field 2", img: "Little_Cora.gif" },
            { n: "Shadow Bustshell", l: "lv 192-195; Coral Field 2", img: "Bustshell.gif" },
            { n: "Shadow Addax", l: "lv 196-400; Dark Cave", img: "Addax.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Desert Jia (Lv 195)": {
        q: "Shaman Girl Jia", req: "Lv 195, Mind's Eye",
        r: "Hunt Fanta Slime, Hula Octopus, etc",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-DesertBeach.png",
        mobs: [
            { n: "Shadow Fanta Slime", l: "lv 195-198; Beach Field 1", img: "Fanta_Slime.gif" },
            { n: "Shadow Hula Octopus", l: "lv 199-202; Beach Field 2", img: "Octopus.gif" },
            { n: "Shadow Sea Scorpion", l: "lv 203-205; Beach Field 3", img: "Sea_Scorpion.gif" },
            { n: "Shadow Oran G", l: "lv 206-209; Pyramid Dungeon 1", img: "Orange_Bettle.gif" },
            { n: "Shadow Basic Mummy", l: "lv 196-400; Py Dungeon 3,4,6", img: "Mummy.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Megalo Jia (Lv 210)": {
        q: "Shaman Girl Jia", req: "Lv 210, Mind's Eye",
        r: "Hunt Yamu, Pochi, Sppo, etc",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-Megalopolis.png",
        mobs: [
            { n: "Shadow Yamu", l: "lv 219-213; Path to Desert", img: "King_Yamu.gif" },
            { n: "Shadow Pochi", l: "lv 213-217; Path to Desert, SE Forest", img: "Pochi.gif" },
            { n: "Shadow Sppo", l: "lv 218-221; Rainbow/Root Cave", img: "Sppo.gif" },
            { n: "Shadow Forest Tickler", l: "lv 222-225; SW Forest", img: "Tickler.gif" },
            { n: "Shadow Turvy", l: "lv 226-400; Spore Cave", img: "Turvy.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Caballa Jia (Lv 225)": {
        q: "Shaman Girl Jia", req: "Lv 225, Mind's Eye",
        r: "Hunt Leaf Bird, Stone Soldier, etc",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-Azteca.png",
        mobs: [
            { n: "Shadow Leaf Bird", l: "lv 225-228; Path to Caballa", img: "Leaf_Bird.gif" },
            { n: "Shadow Stone Soldier", l: "lv 229-232; Relics 1-2", img: "Stone_Soldier.gif" },
            { n: "Shadow Mimic", l: "lv 233-236; Relics 2-4", img: "Mimic.gif" },
            { n: "Shadow Guinna", l: "lv 237-240; Relics Dungeon 1", img: "Guiana.gif" },
            { n: "Shadow Lima", l: "lv 241-400; Relics Dungeon 1-4", img: "Lima.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Oops Jia (Lv 240)": {
        q: "Shaman Girl Jia", req: "Lv 240, Mind's Eye",
        r: "Hunt Ironclad Turtle, Requi, etc",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-OopsWarf.png",
        mobs: [
            { n: "Shadow Ironclad Turtle", l: "lv 240-243; Path", img: "Ironclad_Turtle.gif" },
            { n: "Shadow Requi", l: "lv 244-247; Field 1-3", img: "Requi.gif" },
            { n: "Shadow Black Foe", l: "lv 248-251; Field 4", img: "Black_Foe.gif" },
            { n: "Shadow Cone Stone", l: "lv 252-255; Path to Mermaid", img: "Cone_Stone.gif" },
            { n: "Shadow Pirate Boxer B", l: "lv 256-400; Dark Cave", img: "Pirate_Boxer.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Ghost Blue Jia (Lv 255)": {
        q: "Shaman Girl Jia", req: "Lv 255, Mind's Eye",
        r: "Hunt Mushumushu, Popeyed Anemone",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-GhostBlue.png",
        mobs: [
            { n: "Shadow Mushumushu", l: "lv 255-258; Path 1", img: "Mushumushu.gif" },
            { n: "Shadow Popeyed Anemone", l: "lv 259-262; Field 1", img: "Popeyed_Anemone.gif" },
            { n: "Shadow Monguse", l: "lv 263-266; Field 1-2", img: "Mole_gif.gif" },
            { n: "Shadow Merrow", l: "lv 267-270; Field 3-4", img: "Merrow.gif" },
            { n: "Shadow Nora Joe", l: "lv 271-400; Nora Sewer", img: "Nora_Joe.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Rose Jia (Lv 270)": {
        q: "Shaman Girl Jia", req: "Lv 270, Mind's Eye",
        r: "Hunt Dancer Michel, Captain Norman",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-EventGarden.png",
        mobs: [
            { n: "Shadow Dancer Michel", l: "lv 270-273; Rose 1", img: "Dancer_Michel.gif" },
            { n: "Shadow Captain Norman", l: "lv 274-277; Rose 2,4", img: "Captain_Norman.gif" },
            { n: "Shadow Madam Chiffon", l: "lv 278-281; Rose 3", img: "Madam_Chiffon.gif" },
            { n: "Shadow Maid Lydia", l: "lv 282-285; Vamp Dungeon 1-2", img: "Maid_Lydia.gif" },
            { n: "Shadow Bone Warrior", l: "lv 286-400; Vamp Dungeon 4-5", img: "Bone_Warrior.gif" }

        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Swamp Jia (Lv 285)": {
        q: "Shaman Girl Jia", req: "Lv 180, Mind's Eye",
        r: "Hunt Shadow Lotus Wormhole",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-BlackSwamp.png",
        mobs: [{ n: "Shadow Lotus Wormhole", l: "lv 285-400; Swamp Dungeon", img: "Lotus_Wormhole.gif" }],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Snow Jia (Lv 300)": {
        q: "Shaman Girl Jia", req: "Lv 300, Mind's Eye",
        r: "Hunt King Yamu, Bug Bear, Polar Bear",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-SnowHill.png",
        mobs: [
            { n: "Shadow King Yamu", l: "lv 300-303; NW Forest", img: "King_Yamu.gif" },
            { n: "Shadow Bug Bear", l: "lv 304-307; Path", img: "Bug_Bear.gif" },
            { n: "Shadow Polar Bear", l: "lv 308-311; Snow 2-3", img: "Polar_Bear.gif" },
            { n: "Shadow Niwerth", l: "lv 312-315; Ice Dungeon 1", img: "Niwerth.gif" },
            { n: "Shadow Coolem", l: "lv 316-400; Ice Dungeon 2-4", img: "Coolem.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Techichi Jia (Lv 315)": {
        q: "Shaman Girl Jia", req: "Lv 315, Mind's Eye",
        r: "Hunt Fossil Soldier, Laki, Aabon",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-Techichi.png",
        mobs: [
            { n: "Shadow Fossil Soldier", l: "lv 315-318; Path 1", img: "Coal_Soldier.gif" },
            { n: "Shadow Laki", l: "lv 319-322; Techichi 1-2", img: "Laki.gif" },
            { n: "Shadow Aabon", l: "lv 323-325; Techichi 2", img: "Aabon.gif" },
            { n: "Shadow Malefic Matron", l: "lv 326-329; Ash Dungeon", img: "Malefic_Matron.gif" },
            { n: "Shadow Burning Kili", l: "lv 330-400; Ash Dungeon", img: "Kilimanjaro.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Tapasco Jia (Lv 330)": {
        q: "Shaman Girl Jia", req: "Lv 330, Mind's Eye",
        r: "Hunt Fire Moth, Funky Orc",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-Tapasco.png",
        mobs: [
            { n: "Shadow Fire Moth", l: "lv 330-333; Field 1-2", img: "Fire_Moth.gif" },
            { n: "Shadow Funky Orc", l: "lv 334-337; Field 2-3", img: "Funky_Orc.gif" },
            { n: "Shadow Regent Orc", l: "lv 338-400; Field 2-3", img: "Regent_Orc.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    },
    "Abyss Jia (Lv 345)": {
        q: "Shaman Girl Jia", req: "Lv 345, Mind's Eye",
        r: "Hunt Krybeth, Skelefish",
        npc_img: "npcs/Shaman_Girl_Jia.gif",
        loc_img: "img/locations/jia/ShamanJia-Abyss.png",
        mobs: [
            { n: "Shadow Krybeth", l: "lv 345-348; Abyss 1,3", img: "Krybeth.gif" },
            { n: "Shadow Skelefish", l: "lv 349-400; Abyss 2", img: "Skelefish.gif" }
        ],
        rewards: "50% Chance Major Cora Box, 50% 500g coupon",
        math: { major_cora_box: 0.5 }, type: "jia"
    }
};

const GRASS_QUESTS = {
    "Coral Grass (Lv 20)": {
        q: "Monkey_T", req: "Lv 20", r: "10x Panacea Herb", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Cora.png",
        mobs: [{ n: "Clione", l: "Coral Field 3", img: "Clione_gif.gif" }],
        rewards: "2x Gorgon Shards OR 3x Cora Coupons",
        math: { gorgon: 1, cora_coupon: 1.5 },
        type: "grass"
    },
    "Desert Grass (Lv 20)": {
        q: "Monkey_T", req: "Lv 20", r: "10x Iron Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Paradise.png",
        mobs: [{ n: "Shell Trap", l: "Beach Field 1", img: "Shell_Trap_gif.gif" }],
        rewards: "3x Gorgon Shards OR 3x Cora Coupons",
        math: { gorgon: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Megalo Grass (Lv 20)": {
        q: "Monkey_T", req: "Lv 20", r: "10x Energy Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Mega.png",
        mobs: [{ n: "Forest Tickler", l: "SW Forest", img: "Tickler.gif" }],
        rewards: "3x Gorgon Shards OR 3x Cora Coupons",
        math: { gorgon: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Oops Grass (Lv 60)": {
        q: "Monkey_T", req: "Lv 60", r: "10x Eternal Life Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Oops.png",
        mobs: [{ n: "Quiem", l: "Field 1,3", img: "Quiem.gif" }],
        rewards: "3x Charybdis Shards OR 3x Cora Coupons",
        math: { charybdis: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Mermaid Grass (Lv 75)": {
        q: "Monkey_T", req: "Lv 75", r: "10x Eternal Glamor Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Mermaid.png",
        mobs: [{ n: "Mermaid Little", l: "Field 1,3", img: "Mermaid_Little.gif" }],
        rewards: "3x Charybdis Shards OR 3x Cora Coupons",
        math: { charybdis: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Mirage Grass (Lv 80)": {
        q: "Monkey_T", req: "Lv 80", r: "10x Panacea", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Mirage.png",
        mobs: [{ n: "Werepot", l: "Mirage 1", img: "Werepot.gif" }, { n: "Fabsilag", l: "Mirage 1,5", img: "Fabilsag.gif" }],
        rewards: "3x Charybdis Shards OR 3x Cora Coupons",
        math: { charybdis: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Ghost Blue Grass (Lv 95)": {
        q: "Monkey_T", req: "Lv 95", r: "10x Eternal Vigor Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Ghost_Blue.png",
        mobs: [{ n: "Cora Pyupyu", l: "GB Field 2-3", img: "Cora_Pyupyu.gif" }],
        rewards: "3x Charybdis Shards OR 3x Cora Coupons",
        math: { charybdis: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Rose Grass (Lv 120)": {
        q: "Monkey_T", req: "Lv 120", r: "10x Eternal Charm Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Rose_Garden.png",
        mobs: [{ n: "Beast Vincento", l: "Rose 4", img: "Beast_Vincento.gif" }],
        rewards: "3x Scylla Shards OR 3x Cora Coupons",
        math: { scylla: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Swamp Grass (Lv 140)": {
        q: "Monkey_T", req: "Lv 140", r: "10x Eternal Clarity Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Black_Swamp.png",
        mobs: [{ n: "Monkya", l: "Swamp 3", img: "Monkya.gif" }],
        rewards: "3x Scylla Shards OR 3x Cora Coupons",
        math: { scylla: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Dev Room Grass (Lv 150)": {
        q: "Monkey_T", req: "Lv 150", r: "10x Eternal Youth Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Dev_Room.png",
        mobs: [{ n: "Spiteful Developer Spirit", l: "Dev Room", img: "Spiteful_Developer_Spirit.gif" }],
        rewards: "1x Scylla Shard OR 3x Cora Coupons",
        math: { scylla: 0.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Snow Grass (Lv 160)": {
        q: "Monkey_T", req: "Lv 160", r: "10x Eternal Ice Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Snow.png",
        mobs: [{ n: "Yeti", l: "Snow 3", img: "Yeti.gif" }],
        rewards: "3x Hecate Shards OR 3x Cora Coupons",
        math: { hecate: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Techichi Grass (Lv 200)": {
        q: "Monkey_T", req: "Lv 200", r: "10x Eternal Fire Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Techichi.png",
        mobs: [{ n: "Ponchichi", l: "Techichi 2-3", img: "Ponchichi.gif" }],
        rewards: "3x Hecate Shards OR 3x Cora Coupons",
        math: { hecate: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Tapasco Grass (Lv 270)": {
        q: "Monkey_T", req: "Lv 270", r: "10x Eternal Veneration Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Tapasco.png",
        mobs: [{ n: "Fire Moth", l: "Field 1-2", img: "Fire_Moth.gif" }],
        rewards: "3x Hecate Shards OR 3x Cora Coupons",
        math: { hecate: 1.5, cora_coupon: 1.5 },
        type: "grass"
    },
    "Abyss Grass (Lv 290)": {
        q: "Monkey_T", req: "Lv 290", r: "10x Eternal Bestial Grass", r_img: "Grass.gif",
        npc_img: "monsters/Monkey_T.gif",
        loc_img: "img/locations/monkey_t/Monkey_T_Abyss.png",
        mobs: [{ n: "Ghost Diver", l: "Abyss 1,4", img: "Ghost_Diver.gif" }],
        rewards: "1x Chronos Shards OR 3x Cora Coupons",
        math: { chronos: 0.5, cora_coupon: 1.5 },
        type: "grass"
    }
};
