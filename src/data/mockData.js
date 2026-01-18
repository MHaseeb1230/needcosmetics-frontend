// Import product images
import sunkiss from '../assets/NEEDS/01_sunkiss.jpg';
import cleanser from '../assets/NEEDS/01_spray.jpg';
import hyaluronicSerum from '../assets/NEEDS/01_spray.jpg';
import vitaminCSerum from '../assets/NEEDS/02_orange.jpg';
import acneSerum from '../assets/NEEDS/02_green.jpg';
import whiteningSerum from '../assets/NEEDS/02_white.jpg';
import blueberrySerum from '../assets/NEEDS/02_blue.jpg';
import nightCream from '../assets/NEEDS/01_black_cream.jpg';
import dayCream from '../assets/NEEDS/01_cream_white.jpg';
import faceWashGrey from '../assets/NEEDS/01_grey.jpg';
import faceWashBlue from '../assets/NEEDS/01_blue.jpg';
import faceWashGreen from '../assets/NEEDS/01_green.jpg';
import faceWashOrange from '../assets/NEEDS/01_orange.jpg';



const mockData = {
    "categories": [
        {
            "id": "makeup",
            "name": "Make Up",
            "image": "https://kikocosmetics.pk/cdn/shop/files/MAKE_UP_CATEGORY.jpg?v=1710412345"
        },
        {
            "id": "skincare",
            "name": "Skin Care",
            "image": "https://kikocosmetics.pk/cdn/shop/files/SKIN_CARE_CATEGORY.jpg?v=1710412345"
        },
        {
            "id": "accessories",
            "name": "Accessories",
            "image": "https://kikocosmetics.pk/cdn/shop/files/ACCESSORIES_CATEGORY.jpg?v=1710412345"
        }
    ],
    "products": [
        {
            "id": 1,
            "name": "Need's SunKiss Sunscreen 50ml",
            "price": 2990,
            "originalPrice": 3390,
            "discount": 12,
            "category": "skincare",
            "subcategory": "suncare",
            "image": sunkiss,
            "description": "Need's SunKiss Sunscreen provides ultimate sun protection with SPF 60+++ and advanced UV filters. Water-resistant and long-lasting formula perfect for active lifestyles.",
            "features": [
                {
                    "title": "Water-Resistant & Long-Lasting",
                    "description": "Designed to withstand sweat and water, ensuring dependable sun protection during outdoor activities."
                },
                {
                    "title": "Ultimate Sun Protection",
                    "description": "Formulated with SPF 60+++ and advanced UV filters, including Octocrylene and Butyl Methoxydibenzoylmethane, for broad-spectrum protection against UVA and UVB rays."
                },
                {
                    "title": "Lightweight, Non-Greasy Formula",
                    "description": "Silky, quick-absorbing texture leaves no white cast, offering a matte finish perfect for men's and women's active lifestyles."
                },
                {
                    "title": "Brightening & Skin-Strengthening",
                    "description": "Infused with Niacinamide and 3-O-Ethyl Ascorbic Acid to improve skin tone, reduce dark spots, and enhance skin resilience."
                },
                {
                    "title": "Nourishing Plant Extracts",
                    "description": "Enriched with Dandelion Leaf Extract, Stephania Tetrandra Extract, and saururus chinensis Extract to soothe and calm skin while delivering antioxidant benefits."
                }
            ],
            "keyIngredients": [
                "Octocrylene",
                "Ethylhexyl Salicylate",
                "Phenylbenzimidazole Sulfonic Acid",
                "Polysilicone-11",
                "Cyclohexasiloxane",
                "Niacinamide",
                "Cetyl Phosphate",
                "Arachidyl Glucoside",
                "Hyaluronic Acid (Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer)",
                "3-O-Ethyl Ascorbic Acid",
                "Taraxacum Officinale (Dandelion) Leaf Extract",
                "Stephania Tetrandra Extract",
                "Saururus Chinensis Leaf/Root Extract"
            ],
            "swatches": [
                "#FFB6C1",
                "#FF69B4",
                "#CD5C5C",
                "#B22222"
            ],
            "spf": "SPF 60+++",
            "volume": "50ml",
            "slug": "needs-sunkiss-sunscreen-50ml"
        },
        // {
        //     "id": 2,
        //     "name": "Need's Rice And Coconut Facial Cleanser 200ml",
        //     "price": 2990,
        //     "originalPrice": 3490,
        //     "discount": 14,
        //     "category": "skincare",
        //     "subcategory": "cleansing",
        //     "image": toner,
        //     "description": "Need's Rice And Coconut Facial Cleanser effectively brightens the skin and reduces dark spots with dual whitening technology. Enriched with hydrating and soothing ingredients for balanced, radiant skin.",
        //     "features": [
        //         {
        //             "title": "Dual Whitening Technology",
        //             "description": "Powered by Alpha-Arbutin and Glutathione, this cleanser effectively brightens the skin and reduces the appearance of dark spots and pigmentation."
        //         },
        //         {
        //             "title": "Hydrating & Soothing Formula",
        //             "description": "Deeply hydrate and calm the skin, leaving it soft and balanced."
        //         },
        //         {
        //             "title": "Vitamin-Infused Radiance",
        //             "description": "Enhanced Brightening, anti-inflammatory properties, and improved skin texture."
        //         },
        //         {
        //             "title": "Antioxidant Protection",
        //             "description": "Shields the skin from environmental damage and promotes a youthful glow."
        //         },
        //         {
        //             "title": "Gentle Exfoliation with Microbeads",
        //             "description": "Infused with jojoba esters and colored microbeads, it provides gentle exfoliation to remove dead skin cells for a smoother complexion without irritation."
        //         }
        //     ],
        //     "keyIngredients": [
        //         "Alpha-Arbutin",
        //         "Glutathione",
        //         "Rice Extract",
        //         "Panthenol (pro-vitamin Bs)",
        //         "Niacinamide (Vitamin B3)",
        //         "Jojoba Esters",
        //         "Coconut Extract",
        //         "Vaccinium Angustifolium (Blueberry Fruit Extracts)"
        //     ],
        //     "swatches": ["#FFF5E1", "#FFE4C4", "#F5DEB3", "#DEB887", "#D2B48C"],
        //     "volume": "200ml",
        //     "slug": "needs-rice-and-coconut-facial-cleanser-200ml"
        // },
        {
            "id": 3,
            "name": "Need's Hydrating Glass Skin Toner 200ml",
            "price": 3990,
            "originalPrice": 4490,
            "discount": 11,
            "category": "skincare",
            "subcategory": "toner",
            "image": cleanser,
            "description": "Need's Hydrating Glass Skin Toner delivers multi-level hydration with powerful soothing agents. Infused with hyaluronic acid and antioxidant-rich ingredients for radiant, balanced skin.",
            "features": [
                {
                    "title": "Deep Hydration & Skin Barrier Support",
                    "description": "Infused with Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, and Sodium Acetylated Hyaluronate for multi-level hydration, improving skin elasticity and moisture retention."
                },
                {
                    "title": "Powerful Soothing Agents",
                    "description": "Calm irritation and reduce redness, leaving the skin refreshed and balanced."
                },
                {
                    "title": "Antioxidant-Rich Formula",
                    "description": "Protect against environmental stressors and promote a radiant complexion."
                },
                {
                    "title": "Nutrient-Boosted Glow",
                    "description": "Brighten, smooth, and rejuvenate dull, tired skin."
                },
                {
                    "title": "Gentle for All Skin Types",
                    "description": "Lightweight and alcohol-free, this toner delivers hydration and nourishment without clogging pores or causing sensitivity."
                }
            ],
            "keyIngredients": [
                "Hyaluronic Acid",
                "Sodium Hyaluronate",
                "Niacinamide (Vitamin B3)",
                "Glutathione",
                "Centella Asiatica Extract",
                "Camellia Sinensis (Green Tea)",
                "Helianthus Annuus (Sunflower) Seed Oil Unsaponifiables",
                "Glycolic Acid",
                "Allantion"
            ],
            "swatches": ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA"],
            "volume": "200ml",
            "slug": "needs-hydrating-glass-skin-toner-200ml"
        },
        {
            "id": 4,
            "name": "Hyaluronic Face Serum (Blueberry Dual-Phase)",
            "price": 4790,
            "originalPrice": 5290,
            "discount": 9,
            "category": "skincare",
            "subcategory": "serum",
            "image": blueberrySerum,
            "description": "Need's Hyaluronic Acid Face Serum features a unique two-phase formula with powerful Blueberry Extract and Aloe Leaf Water for deep hydration. Age-defying peptide complex visibly reduces fine lines and wrinkles.",
            "features": [
                {
                    "title": "Dual-Phase Hydration & Nourishment",
                    "description": "The Unique two-phase formula powerful Blueberry Extract and Aloe Leaf Water offering deep hydration and soothing properties while replenishing the skin's moisture balance."
                },
                {
                    "title": "Age-Defying Peptide Complex (Anti-Ageing)",
                    "description": "Combiness powerful peptides to visibly reduce fine lines and wrinkles, promoting smoother, firmer, and more youthful-looking skin."
                },
                {
                    "title": "Skin Barrier Strengthening",
                    "description": "Repairs and reinforces the skin's natural barrier, boosting elasticity while shielding against environmental stressors."
                },
                {
                    "title": "Radiance-Boosting & Soothing Care",
                    "description": "Gently exfoliates, brightens, and calms the skin, helping to reduce redness and enhance your complexion natural glow."
                },
                {
                    "title": "Advanced Antioxidant Defense",
                    "description": "Packed with antioxidants to protect the skin from free radical damage and support its natural healing process, promoting healthier skin."
                }
            ],
            "keyIngredients": [
                "Aloe Vera Leaf Water",
                "Mandelic Acid",
                "Jojoba Seed Oil",
                "Squalane",
                "Vitamin E (Tocopherol)",
                "1.2 - Hexanediol",
                "Hydroxyacetophenon",
                "Allantoin",
                "Portulaca Oleracea Extract (Purslane Extract)",
                "Hyaluronic Acid Sodium Hyaluronate",
                "Centella Asiatica",
                "Madecassoside",
                "Dandelion Leaf Extract",
                "Stephania Tetrandra Extract",
                "Saururus Leaf Root Extract",
                "Ceramide NP Ceramide AP Ceramide EOP",
                "Vaccinium Angustifolium (Blueberry) Fruit Extract",
                "Acetyl Hexapeptide - 8",
                "Copper Tripeptide - 1",
                "Palmitoyl Tripeptide - 1",
                "Palmitoyl Tetrapeptide - 3",
                "Hexapeptide – 1,3,9"
            ],
            "swatches": ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0"],
            "volume": "30ml",
            "slug": "hyaluronic-face-serum-blueberry-dual-phase-30ml"
        },
        {
            "id": 5,
            "name": "Multi-Vitamin C Serum",
            "price": 4490,
            "originalPrice": 4990,
            "discount": 10,
            "category": "skincare",
            "subcategory": "serum",
            "image": vitaminCSerum,
            "description": "Multi-Vitamin C Serum formulated with 3-O-Ethyl Ascorbic Acid, a stable form of Vitamin C, brightens the complexion and reduces dark spots. Multi-vitamin blend nourishes and revitalizes for glowing, healthy skin with powerful antioxidant protection.",
            "features": [
                {
                    "title": "Powerful Vitamin C Complex",
                    "description": "Formulated with 3-O-Ethyl Ascorbic Acid, a stable form of Vitamin C, this serum brightens the complexion, reducing the appearance of dark spots and hyperpigmentation for a more even skin tone."
                },
                {
                    "title": "Multi-Vitamin Blend for Radiant Skin",
                    "description": "Nourishes and revitalizes the skin, leaving it glowing and healthy."
                },
                {
                    "title": "Hydration & Skin Barrier Protection",
                    "description": "Help to restore moisture, improve the skin's hydration levels and reinforce the natural skin barrier for smoother, more resilient skin."
                },
                {
                    "title": "Soothing & Calming",
                    "description": "Help calm irritated skin, reducing redness and promoting a balanced, calm complexion."
                },
                {
                    "title": "Antioxidant Defense & Skin Health",
                    "description": "Provides powerful antioxidant protection, fighting free radicals and supporting the skin's natural healing process."
                }
            ],
            "keyIngredients": [
                "Bifida Ferment Lysate",
                "Acetyl Hexapeptide-8",
                "Niacinamide (Vitamin B3)",
                "Sodium Hyaluronate (Hyaluronic Acid)",
                "3-O-Ethyl Ascorbic Acid (Stable Vitamin C)",
                "Phytonadione (Vitamin K)",
                "Tocopherol (Vitamin E)",
                "Panthenol (Vitamin B5)",
                "Peanut Acid",
                "Zinc PCA",
                "Cholecalciferol (Vitamin D3)",
                "Rosa Rugosa Flower Oil"
            ],
            "swatches": ["#FFF9E6", "#FFF3CD", "#FFECB5", "#FFE69C", "#FFD700"],
            "volume": "30ml",
            "slug": "multi-vitamin-c-serum-30ml"
        },
        {
            "id": 6,
            "name": "Acne Solution Face Serum",
            "price": 4490,
            "originalPrice": 4990,
            "discount": 10,
            "category": "skincare",
            "subcategory": "serum",
            "image": acneSerum,
            "description": "Need's Acne Solution Face Serum formulated with Salicylic Acid and Willow Bark Extract penetrates deep into pores to clear breakouts and prevent future blemishes. Gentle exfoliation with calming and soothing power.",
            "features": [
                {
                    "title": "Advanced Acne Control",
                    "description": "Formulated with Salicylic Acid and Willow Bark Extract, this serum penetrates deep into pores to clear breakouts, reduce excess oil, and prevent future blemishes."
                },
                {
                    "title": "Exfoliation Without Irritation",
                    "description": "Gentle acids smooth skin texture by encouraging cell turnover while minimizing redness and sensitivity."
                },
                {
                    "title": "Calming & Soothing Power",
                    "description": "Soothe inflammation, reduce redness, and promote skin repair."
                },
                {
                    "title": "Oil-Balancing & Hydration",
                    "description": "Combines Zinc PCA and Hyaluronic Acid to regulate sebum production while deeply hydrating for a balanced, healthy complexion."
                },
                {
                    "title": "Antioxidant Protection",
                    "description": "Shield skin from environmental stressors and promote a more radiant, even-toned appearance."
                }
            ],
            "keyIngredients": [
                "Salicylic Acid",
                "Betaine",
                "Sodium Lactate",
                "Lactobionic Acid",
                "Pentylene Glycol",
                "Portulaca Oleracea Extract",
                "Sesame Amino Acids",
                "Salix Alba (Willow) Bark Extract",
                "Camellia Sinensis Leaf Extract",
                "Xanthan Gum",
                "Allantoin",
                "Dipotassium Glycyrrhizate",
                "Zinc PCA",
                "Asiaticoside",
                "Centella Asiatica Extract",
                "Madecassoside",
                "Sodium Hyaluronate (Hyaluronic Acid)"
            ],
            "swatches": ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A"],
            "volume": "30ml",
            "slug": "acne-solution-face-serum-30ml"
        },
        {
            "id": 7,
            "name": "Whitening Serum",
            "price": 4490,
            "originalPrice": 4990,
            "discount": 10,
            "category": "skincare",
            "subcategory": "serum",
            "image": whiteningSerum,
            "description": "Whitening Serum features Alpha-Arbutin and 3-O-Ethyl Ascorbic Acid which target dark spots and discoloration for a visibly brighter, more even complexion. Lightweight, fast-absorbing texture delivers an instant cooling effect, perfect for revitalizing men's skin.",
            "features": [
                {
                    "title": "Powerful Brightening Formula",
                    "description": "Features Alpha-Arbutin and 3-O-Ethyl Ascorbic Acid, which target dark spots and discoloration for a visibly brighter, more even complexion."
                },
                {
                    "title": "Cooling & Refreshing Sensation",
                    "description": "Lightweight, fast-absorbing texture delivers an instant cooling effect, perfect for revitalizing men's skin."
                },
                {
                    "title": "Hydrating & Soothing Benefits",
                    "description": "Deeply hydrate, calm irritation, and strengthen the skin barrier."
                },
                {
                    "title": "Anti-Fatigue Complex",
                    "description": "Combat signs of tiredness, reduce fine lines, and restore energy to your skin."
                },
                {
                    "title": "Non-Greasy & Easy Absorption",
                    "description": "Specially designed for men's thicker skin, the serum leaves no residue, ensuring a fresh, matte finish for all-day confidence."
                }
            ],
            "keyIngredients": [
                "Bifida Ferment Lysate",
                "Acetyl Hexapeptide-8",
                "Alpha-Arbutin",
                "Sodium Hyaluronate (Hyaluronic Acid)",
                "3-O-Ethyl Ascorbic Acid",
                "Glutathione",
                "Rosa Rugosa Flower Oil"
            ],
            "swatches": ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28"],
            "volume": "30ml",
            "slug": "whitening-serum-30ml"
        },
        {
            "id": 8,
            "name": "Need's Hyaluronic Fairness Night Cream *50ml",
            "price": 6990,
            "originalPrice": 7290,
            "discount": 4,
            "category": "skincare",
            "subcategory": "moisturizer",
            "image": nightCream,
            "description": "Need's Hyaluronic Fairness Night Cream reduces fine lines and wrinkles while promoting smoother, more even skin tone. Boost collagen and restore elasticity for visibly lifted, youthful skin every morning.",
            "features": [
                {
                    "title": "Age-Defying Transformation",
                    "description": "Reducing the appearance of fine lines and wrinkles while promoting a smoother, more even skin tone, Wake up to younger-looking skin every day."
                },
                {
                    "title": "Firm Youthful Glow",
                    "description": "Boost collagen, firm the skin and restore elasticity, Enjoy visibly lifted, smoother and more youthful skin every morning."
                },
                {
                    "title": "Nourishing & Soothing",
                    "description": "Nourishes and calms your skin, leaving it soft, supple and perfectly balanced."
                },
                {
                    "title": "Powerful Antioxidant Protection",
                    "description": "Potent antioxidants that protect your skin from daily environmental damage, helping to preserve a youthful radiant complexion."
                },
                {
                    "title": "Wake Up to Radiant Skin",
                    "description": "Provides intense moisture, leaving your skin plump, refreshed and glowing by morning."
                }
            ],
            "keyIngredients": [
                "Butyrospermum Parkii (Shea Butter)",
                "Simmondsia Jojoba Butter",
                "Simmondsia Chinensis (Jojoba) Seed Oil",
                "Isononyl Isononanoate",
                "Squalane",
                "Alumina Magnesium",
                "Stearic Acid",
                "Tocopherol (Vitamin E)",
                "Silybum Marianum (Milk Thistle) Extract",
                "Vaccinium Angustifolium (Blueberry) Fruit Extract",
                "Allantoin",
                "Hyaluronic Acid Sodium Hyaluronate",
                "Retinol",
                "Glutathione"
            ],
            "swatches": ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC"],
            "volume": "50ml",
            "slug": "needs-hyaluronic-fairness-night-cream-50ml"
        },
        {
            "id": 9,
            "name": "COMPLETE Brightening Day Cream",
            "price": 6490,
            "originalPrice": 6790,
            "discount": 4,
            "category": "skincare",
            "subcategory": "moisturizer",
            "image": dayCream,
            "description": "COMPLETE Brightening Day Cream enriched with 3-O-Ethyl Ascorbic Acid (a stable form of Vitamin C) and Niacinamide visibly reduces dark spots and evens skin tone for a radiant, luminous complexion. Lightweight and non-greasy, this cream absorbs quickly, leaving the skin soft, smooth, and perfectly prepped for makeup application or daily wear.",
            "features": [
                {
                    "title": "Advanced Brightening Power",
                    "description": "Enriched with 3-O-Ethyl Ascorbic Acid (a stable form of Vitamin C) and Niacinamide, this cream visibly reduces dark spots and evens skin tone for a radiant, luminous complexion."
                },
                {
                    "title": "Long-Lasting Hydration & Skin Barrier Support",
                    "description": "Deeply hydrates and nourishes the skin, reinforcing the natural barrier for smoother, softer texture."
                },
                {
                    "title": "Antioxidant & Environmental Defense",
                    "description": "Protects against free radical damage and soothes the skin, promoting a healthy glow."
                },
                {
                    "title": "Skin-Soothing and Restorative Formula",
                    "description": "Calms irritated skin, reduces redness, and restores balance for a comfortable, refreshed feel all day long."
                },
                {
                    "title": "Perfect Daily Base",
                    "description": "Lightweight and non-greasy, this cream absorbs quickly, leaving the skin soft, smooth, and perfectly prepped for makeup application or daily wear."
                }
            ],
            "keyIngredients": [
                "Niacinamide",
                "3-O-Ethyl Ascorbic Acid",
                "Dimethicone Phenyl Vinyl Dimethicone Crosspolymer",
                "Butyrospermum Parkii (Shea Butter)",
                "Portulaca Oleracea Extract",
                "Simmondsia (Jojoba) Seed Oil",
                "Piper Methysticum Root Extract",
                "Helianthus Annuus (Sunflower) Seed Oil",
                "Tocopherol (Vitamin E)",
                "Beta-Carotene",
                "Panthenol",
                "Hydroxyacetophenone",
                "Sodium Hyaluronate (Hyaluronic Acid)",
                "Sophora Angustifolia Root Extract",
                "Salvia Miltiorrhiza Root Extract",
                "Thymus Vulgaris (Thyme) Leaf Extract",
                "Coptis Chinensis Root Extract"
            ],
            "swatches": ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726"],
            "volume": "50ml",
            "slug": "complete-brightening-day-cream-50ml"
        },
        {
            "id": 10,
            "name": "Men's Facial Cleanser",
            "price": 3490,
            "originalPrice": 3990,
            "discount": 13,
            "category": "skincare",
            "subcategory": "cleansing",
            "image": faceWashGrey,
            "description": "Men's Facial Cleanser with soluble jojoba microbeads effectively removes dirt, excess oil, and impurities while being gentle on the skin. Infused with menthol for an invigorating cooling sensation, it locks in moisture and soothes irritation. Designed to tackle the unique challenges of men's skin, including thicker skin and excess oil production, delivering a balanced and matte finish.",
            "features": [
                {
                    "title": "Deep Clean with Gentle Exfoliation",
                    "description": "Formulated with soluble jojoba microbeads, this cleanser effectively removes dirt, excess oil, and impurities while being gentle on the skin, preventing irritation."
                },
                {
                    "title": "Cooling Menthol Freshness",
                    "description": "Infused with menthol, it provides an invigorating cooling sensation, leaving your skin refreshed and energized."
                },
                {
                    "title": "Hydration & Soothing",
                    "description": "Locks in moisture, soothes irritation, and prevents dryness after cleansing."
                },
                {
                    "title": "Tailored for Men's Skin",
                    "description": "Designed to tackle the unique challenges of men's skin, including thicker skin and excess oil production, delivering a balanced and matte finish."
                },
                {
                    "title": "Vibrant Blue Beads for Visual Appeal",
                    "description": "Enhanced with Ultramarine Blue microbeads, the cleanser not only feels great but looks great too, elevating your daily grooming routine."
                }
            ],
            "keyIngredients": [
                "Aloe Barbadensis Leaf Water",
                "Sodium Cocoyl Glutamate",
                "Menthol",
                "Sodium Polyglutamate",
                "Jojoba Esters",
                "Allantoin",
                "Panthenol (Pro-Vitamin B5)",
                "Sodium Hyaluronate (Hyaluronic Acid)"
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "mens-facial-cleanser-100ml"
        },
        {
            "id": 11,
            "name": "Hyaluronic Face Wash Cleanser",
            "price": 3490,
            "originalPrice": 3990,
            "discount": 13,
            "category": "skincare",
            "subcategory": "cleansing",
            "image": faceWashBlue,
            "description": "Hyaluronic Face Wash Cleanser deeply hydrates the skin while effectively removing dirt, oil, and makeup. Packed with antioxidants that protect from environmental stress, it gently soothes irritated skin, strengthens the skin barrier, and promotes healthy, resilient skin. Ideal for all skin types, including sensitive skin, this cleanser provides a non-stripping, gentle clean.",
            "features": [
                {
                    "title": "Deep Hydration & Cleanse",
                    "description": "This cleanser deeply hydrates the skin while effectively removing dirt, oil, and makeup, leaving your skin feeling soft and refreshed."
                },
                {
                    "title": "Antioxidant-Rich Protection",
                    "description": "Packed with antioxidants that protect the skin from environmental stress, helping to brighten the complexion and preserve skin's youthful radiance."
                },
                {
                    "title": "Soothing & Calming",
                    "description": "Gently soothes irritated skin, reducing redness and inflammation while promoting a calm, balanced complexion."
                },
                {
                    "title": "Nourishing & Restorative",
                    "description": "Strengthen the skin barrier, restoring moisture and promoting healthy, resilient skin."
                },
                {
                    "title": "Gentle Formula",
                    "description": "Ideal for all skin types, including sensitive skin, this cleanser provides a non-stripping, gentle clean that keeps your skin healthy."
                }
            ],
            "keyIngredients": [
                "Methylpropanediol",
                "Niacinamide",
                "1,2-Hexanediol",
                "Hydroxyacetophenone",
                "Hexylene Glycol",
                "Glycine",
                "Betaine",
                "Serine",
                "Glutamic Acid",
                "Allantoin",
                "Adenosine",
                "Aspartic Acid",
                "Citrus Aurantium Bergamia (Bergamot) Fruit Oil",
                "Ribes Nigrum (Black Currant) Seed Oil",
                "Hyaluronic Acid (Sodium Hyaluronate)",
                "Helianthus Annuus (Sunflower) Seed Oil",
                "Centella Asiatica Extract",
                "Cardiospermum Halicacabum Flower/Leaf Extract",
                "Scutellaria Baicalensis Root Extract",
                "Citrus Unshiu Peel Extract",
                "Glycyrrhiza Glabra (Licorice) Root Extract",
                "Camellia Sinensis Leaf Extract",
                "Chamomilla Recutita (Matricaria) Flower Extract"
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "hyaluronic-face-wash-cleanser-100ml"
        },
        {
            "id": 12,
            "name": "Acne Solution Face Wash Cleanser",
            "price": 3490,
            "originalPrice": 3990,
            "discount": 13,
            "category": "skincare",
            "subcategory": "cleansing",
            "image": faceWashGreen,
            "description": "Acne Solution Face Wash Cleanser powered by Salicylic Acid and Glycolic Acid deeply cleanses pores, removes excess oil, and helps reduce breakouts. This hydrating formula maintains moisture balance, soothes redness, and protects skin from environmental stressors. With mild surfactants, it provides a deep cleanse without stripping skin, making it suitable for sensitive or acne-prone skin.",
            "features": [
                {
                    "title": "Effective Acne-Fighting Formula",
                    "description": "Powered by Salicylic Acid and Glycolic Acid, this cleanser deeply cleanses pores, removes excess oil, and helps reduce breakouts while preventing new ones."
                },
                {
                    "title": "Hydrating & Soothing",
                    "description": "Maintains moisture balance and soothes redness, leaving your skin calm and refreshed."
                },
                {
                    "title": "Natural Antioxidant Boost",
                    "description": "Protect skin from environmental stressors while enhancing a radiant complexion."
                },
                {
                    "title": "Gentle Yet Powerful Cleansing",
                    "description": "Mild surfactants provide a deep cleanse without stripping skin, making it suitable for sensitive or acne-prone skin."
                },
                {
                    "title": "Nourishing Plant-Based Care",
                    "description": "Improve skin texture, balance sebum production, and promote a clearer, healthier-looking complexion."
                }
            ],
            "keyIngredients": [
                "Aloe Barbadensis Leaf Water",
                "Sodium Cocoyl Glycinate",
                "Sodium Cocoyl Glutamate",
                "Butylene Glycol",
                "Avocado Oil PEG-8 Esters",
                "Avocado Oil PEG-11 Esters",
                "Persea Gratissima (Avocado) Fruit Extract",
                "Salicylic Acid",
                "Sodium Polyglutamate",
                "Niacinamide",
                "Allantoin",
                "Camellia Sinensis Leaf Extract",
                "Panthenol (Vitamin B5)",
                "Glycolic Acid",
                "Punica Granatum",
                "Sodium Hyaluronate"
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "acne-solution-face-wash-cleanser-100ml"
        },  
        {
            "id": 13,
            "name": "Vitamin C Face Wash Cleanser",
            "price": 3490,
            "originalPrice": 3990,
            "discount": 13,
            "category": "skincare",
            "subcategory": "cleansing",
            "image": faceWashOrange,
            "description": "Vitamin C Face Wash Cleanser with Ascorbic Acid visibly brightens the complexion, reduces dullness, and promotes a more even skin tone. Delivers long-lasting hydration to keep the skin plump, smooth, and refreshed. This gentle formula soothes sensitive skin, supports natural skin repair, and is lightweight, non-drying, suitable for all skin types.",
            "features": [
                {
                    "title": "Vitamin C Brightening Power",
                    "description": "Visibly brightens the complexion, reduces dullness, and helps promote a more even skin tone."
                },
                {
                    "title": "Deep Hydration Boost",
                    "description": "Delivers long-lasting hydration to keep the skin plump, smooth, and refreshed."
                },
                {
                    "title": "Soothing and Restorative",
                    "description": "Soothes sensitive skin and supports natural skin repair."
                },
                {
                    "title": "Gentle Cleansing",
                    "description": "Provides intense moisture, leaving your skin plump, refreshed, and glowing."
                },
                {
                    "title": "Perfect for Daily Use",
                    "description": "Lightweight, non-drying, and suitable for all skin types. This cleanser is the ideal first step in a hydrating and brightening skincare routine."
                }
            ],
            "keyIngredients": [
                "Sodium Cocoyl Glycinate",
                "Lauryl Glucoside",
                "PEG-150 Pentaerythrityl Tetrastearate",
                "Ascorbic Acid (Vitamin C)",
                "Butylene Glycol",
                "Phenoxyethanol",
                "Sodium Polyglutamate",
                "Honey",
                "Touhi Ekisu (Japanese Cedar Extract)",
                "1,2-Hexanediol",
                "Panthenol (Pro-Vitamin B5)",
                "Panax Ginseng Root Extract",
                "Sodium Hyaluronate (Hyaluronic Acid)"
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "vitamin-c-face-wash-cleanser-100ml"
        },
        // {
        //     "id": 11,
        //     "name": "Smart Fusion Lip Pencil",
        //     "price": 1715,
        //     "originalPrice": 2450,
        //     "discount": 30,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/SMART_FUSION_LIP_PENCIL_01.jpg?v=1710412345",
        //     "swatches": ["#C97064", "#B5495B", "#8B3A62", "#6B3340", "#A8516E"]
        // },
        // {
        //     "id": 11,
        //     "name": "Unlimited Lip Stylo",
        //     "price": 4680,
        //     "originalPrice": 5850,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/UNLIMITED_LIP_STYLO_01.jpg?v=1710412345",
        //     "swatches": ["#E6B8B7", "#D4A5A5", "#C48B8B", "#A97272", "#8F5E5E"]
        // },
        // {
        //     "id": 12,
        //     "name": "Gossamer Emotion Creamy Lipstick",
        //     "price": 4680,
        //     "originalPrice": 5850,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/GOSSAMER_EMOTION_LIPSTICK_01.jpg?v=1710412345",
        //     "swatches": ["#DC143C", "#C71585", "#8B008B", "#B22222", "#CD5C5C"]
        // },
        // {
        //     "id": 13,
        //     "name": "Jelly Stylo",
        //     "price": 4193,
        //     "originalPrice": 5990,
        //     "discount": 30,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/JELLY_STYLO_01.jpg?v=1710412345",
        //     "swatches": ["#FFB6C1", "#FF69B4", "#FF1493", "#DB7093", "#FFC0CB"]
        // },
        // {
        //     "id": 14,
        //     "name": "Long Lasting Colour Lip Marker",
        //     "price": 4680,
        //     "originalPrice": 5850,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/LIP_MARKER_01.jpg?v=1710412345",
        //     "swatches": ["#E74C3C", "#C0392B", "#922B21", "#641E16", "#A93226"]
        // },
        // {
        //     "id": 15,
        //     "name": "Lasting Matte Veil - 2023",
        //     "price": 4968,
        //     "originalPrice": 6210,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/LASTING_MATTE_VEIL_01.jpg?v=1710412345",
        //     "swatches": ["#D2691E", "#A0522D", "#8B4513", "#654321", "#806517"]
        // },
        // {
        //     "id": 16,
        //     "name": "Velvet Passion Matte Lipstick",
        //     "price": 4680,
        //     "originalPrice": 5850,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/VELVET_PASSION_LIPSTICK_01.jpg?v=1710412345",
        //     "swatches": ["#8B0000", "#A52A2A", "#B22222", "#DC143C", "#800020"]
        // },
        // {
        //     "id": 17,
        //     "name": "Lip Volume Tutu Rose New 2019",
        //     "price": 3528,
        //     "originalPrice": 4410,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/LIP_VOLUME_TUTU_01.jpg?v=1710412345",
        //     "swatches": ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#C71585"]
        // },
        // {
        //     "id": 18,
        //     "name": "Smart Fusion Creamy Lip Crayon",
        //     "price": 1905,
        //     "originalPrice": 3810,
        //     "discount": 50,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/SMART_FUSION_CRAYON_01.jpg?v=1710412345",
        //     "swatches": ["#DDA0DD", "#DA70D6", "#BA55D3", "#9370DB", "#8B008B"]
        // },
        // {
        //     "id": 19,
        //     "name": "Hydra Shiny Lip Stylo",
        //     "price": 3850,
        //     "originalPrice": 5500,
        //     "discount": 30,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/HYDRA_SHINY_LIP_STYLO_01.jpg?v=1710412345",
        //     "swatches": ["#F08080", "#FA8072", "#E9967A", "#CD853F", "#BC8F8F"]
        // },
        // {
        //     "id": 20,
        //     "name": "Smart Fusion Matte Lip Crayon",
        //     "price": 1905,
        //     "originalPrice": 3810,
        //     "discount": 50,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/SMART_FUSION_MATTE_CRAYON_01.jpg?v=1710412345",
        //     "swatches": ["#C04000", "#B7410E", "#CC5500", "#D2691E", "#A0522D"]
        // },
        // {
        //     "id": 21,
        //     "name": "Lip Scrub New 2019",
        //     "price": 2248,
        //     "originalPrice": 2810,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/LIP_SCRUB_01.jpg?v=1710412345",
        //     "swatches": ["#FFF0F5", "#FFE4E1", "#FFB6C1", "#FFC0CB", "#FFD4DB"]
        // },
        // {
        //     "id": 22,
        //     "name": "Metal Liquid Lip Colour",
        //     "price": 4347,
        //     "originalPrice": 6210,
        //     "discount": 30,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/METAL_LIQUID_LIP_01.jpg?v=1710412345",
        //     "swatches": ["#C0C0C0", "#B87333", "#E5AA70", "#CD7F32", "#9C7C38"]
        // },
        // {
        //     "id": 23,
        //     "name": "Lip Balm New 2019",
        //     "price": 2248,
        //     "originalPrice": 2810,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/LIP_BALM_01.jpg?v=1710412345",
        //     "swatches": ["#FFE4E1", "#FADADD", "#FFB6C1", "#FFE4B5", "#F5DEB3"]
        // },
        // {
        //     "id": 24,
        //     "name": "Instant Colour Matte Liquid Lip Colour",
        //     "price": 4095,
        //     "originalPrice": 5850,
        //     "discount": 30,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/INSTANT_COLOUR_MATTE_01.jpg?v=1710412345",
        //     "swatches": ["#8B4513", "#A0522D", "#CD853F", "#D2691E", "#B8860B"]
        // },
        // {
        //     "id": 25,
        //     "name": "Lip Volume Trasparente New 2019",
        //     "price": 3528,
        //     "originalPrice": 4410,
        //     "discount": 20,
        //     "category": "makeup",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/LIP_VOLUME_TRASPARENTE_01.jpg?v=1710412345",
        //     "swatches": ["#FFFFFF", "#FFFAFA", "#FFF5EE", "#FFE4E1", "#FFEFD5"]
        // },
        // {
        //     "id": 26,
        //     "name": "Smart Drops Glow Glowing Booster",
        //     "price": 3157,
        //     "originalPrice": 4510,
        //     "discount": 30,
        //     "category": "skincare",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/SMART_DROPS_GLOW_01.jpg?v=1710412345",
        //     "swatches": ["#FFE4B5", "#FFEAA7", "#FFDAB9", "#F0E68C", "#EEE8AA"]
        // },
        // {
        //     "id": 27,
        //     "name": "New Hydra Pro Glow",
        //     "price": 9288,
        //     "originalPrice": 11610,
        //     "discount": 20,
        //     "category": "skincare",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/HYDRA_PRO_GLOW_01.jpg?v=1710412345",
        //     "swatches": ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A"]
        // },
        // {
        //     "id": 28,
        //     "name": "Intensive Hand Cream",
        //     "price": 3159,
        //     "originalPrice": 3510,
        //     "discount": 10,
        //     "category": "skincare",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/INTENSIVE_HAND_CREAM_01.jpg?v=1710412345",
        //     "swatches": ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC"]
        // },
        // {
        //     "id": 29,
        //     "name": "Smart Radiance Cream 3In1",
        //     "price": 5887,
        //     "originalPrice": 8410,
        //     "discount": 30,
        //     "category": "skincare",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/SMART_RADIANCE_CREAM_01.jpg?v=1710412345",
        //     "swatches": ["#FFF9E6", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28"]
        // },
        // {
        //     "id": 30,
        //     "name": "Smart Hydra Shot Stick",
        //     "price": 2975,
        //     "originalPrice": 4250,
        //     "discount": 30,
        //     "category": "skincare",
        //     "image": "https://kikocosmetics.pk/cdn/shop/files/SMART_HYDRA_SHOT_01.jpg?v=1710412345",
        //     "swatches": ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"]
        // }
    ]
};

export default mockData;



