// Import product images
import sunkiss from '../assets/NEEDS/01_sunkiss.jpg';
import cleanser from '../assets/NEEDS/01_spray.jpg';
import toner from '../assets/NEEDS/01_cleanser.jpg';
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
            "image": null
        },
        {
            "id": "skincare",
            "name": "Skin Care",
            "image": null
        },
        {
            "id": "accessories",
            "name": "Accessories",
            "image": null
        }
    ],
    "products": [
        {
            "id": 1,
            "name": "Need's SunKiss Sunscreen 50ml",
            "price": 2990,
            "originalPrice": 3490,
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
                {
                    "name": "Octocrylene",
                    "benefit": "A chemical sunscreen agent that absorbs UVB and short UVA rays, protecting the skin from sun damage."
                },
                {
                    "name": "Ethylhexyl Salicylate",
                    "benefit": "A UVB filter that helps protect the skin from the harmful effects of sun exposure."
                },
                {
                    "name": "Phenylbenzimidazole Sulfonic Acid",
                    "benefit": "A water-soluble UVA/UVB filter that helps protect the skin from sunburn."
                },
                {
                    "name": "Polysilicone-11",
                    "benefit": "A silicone-based film-former that creates a smooth, matte finish on the skin."
                },
                {
                    "name": "Cyclohexasiloxane",
                    "benefit": "A silicone used to improve texture and provide a smooth feel."
                },
                {
                    "name": "Niacinamide",
                    "benefit": "A form of Vitamin B3 that brightens skin, improves elasticity, and enhances skin barrier function."
                },
                {
                    "name": "Cetyl Phosphate",
                    "benefit": "An emulsifying agent that helps stabilize oil-in-water emulsions."
                },
                {
                    "name": "Arachidyl Glucoside",
                    "benefit": "An emulsifier that helps mix oil and water components evenly."
                },
                {
                    "name": "Hyaluronic Acid (Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer)",
                    "benefit": "A thickening and stabilizing polymer that gives formulations a smooth texture."
                },
                {
                    "name": "3-O-Ethyl Ascorbic Acid",
                    "benefit": "A stable form of Vitamin C that brightens skin and provides antioxidant benefits."
                },
                {
                    "name": "Taraxacum Officinale (Dandelion) Leaf Extract",
                    "benefit": "Offers antioxidant properties and helps soothe and calm the skin."
                },
                {
                    "name": "Stephania Tetrandra Extract",
                    "benefit": "Known for its soothing and anti-inflammatory effects."
                },
                {
                    "name": "Saururus Chinensis Leaf/Root Extract",
                    "benefit": "Provides brightening and antioxidant benefits for the skin."
                }
            ],
            "swatches": [
                "#FFB6C1",
                "#FF69B4",
                "#CD5C5C",
                "#B22222"
            ],
            "spf": "SPF 60+++",
            "volume": "50ml",
            "slug": "needs-sunkiss-sunscreen-50ml",
            "reviews": [
                {
                    "name": "Sarah Ahmed",
                    "rating": 5,
                    "comment": "Amazing sunscreen! Doesn't leave a white cast and feels so lightweight. Perfect for daily use. Highly recommend!",
                    "date": "2 days ago",
                    "verified": true
                },
                {
                    "name": "Ali Khan",
                    "rating": 4,
                    "comment": "Great protection and non-greasy formula. Works well under makeup. Only wish it was a bit more affordable.",
                    "date": "1 week ago",
                    "verified": true
                },
                {
                    "name": "Fatima Sheikh",
                    "rating": 5,
                    "comment": "Best sunscreen I've tried! My skin feels protected and looks brighter. Will definitely repurchase.",
                    "date": "2 weeks ago",
                    "verified": true
                }
            ]
        },
        {
            "id": 2,
            "name": "Need's Rice And Coconut Facial Cleanser 200ml",
            "price": 2990,
            "originalPrice": 3490,
            "discount": 14,
            "category": "skincare",
            "subcategory": "toner",
            "image": toner,
            "description": "Need's Rice And Coconut Facial Cleanser effectively brightens the skin and reduces dark spots with dual whitening technology. Enriched with hydrating and soothing ingredients for balanced, radiant skin.",
            "features": [
                {
                    "title": "Dual Whitening Technology",
                    "description": "Powered by Alpha-Arbutin and Glutathione, this cleanser effectively brightens the skin and reduces the appearance of dark spots and pigmentation."
                },
                {
                    "title": "Hydrating & Soothing Formula",
                    "description": "Deeply hydrate and calm the skin, leaving it soft and balanced."
                },
                {
                    "title": "Vitamin-Infused Radiance",
                    "description": "Enhanced Brightening, anti-inflammatory properties, and improved skin texture."
                },
                {
                    "title": "Antioxidant Protection",
                    "description": "Shields the skin from environmental damage and promotes a youthful glow."
                },
                {
                    "title": "Gentle Exfoliation with Microbeads",
                    "description": "Infused with jojoba esters and colored microbeads, it provides gentle exfoliation to remove dead skin cells for a smoother complexion without irritation."
                }
            ],
            "keyIngredients": [
                "Alpha-Arbutin",
                "Glutathione",
                "Rice Extract",
                "Panthenol (pro-vitamin Bs)",
                "Niacinamide (Vitamin B3)",
                "Jojoba Esters",
                "Coconut Extract",
                "Vaccinium Angustifolium (Blueberry Fruit Extracts)"
            ],
            "swatches": ["#FFF5E1", "#FFE4C4", "#F5DEB3", "#DEB887", "#D2B48C"],
            "volume": "200ml",
            "slug": "needs-rice-and-coconut-facial-cleanser-200ml"
        },
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
                {
                    "name": "Niacinamide",
                    "benefit": "Brightening and anti-inflammatory; improves skin tone and texture."
                },
                {
                    "name": "Allantoin",
                    "benefit": "Soothing agent that promotes healing and calms irritation."
                },
                {
                    "name": "Citrus Aurantium Bergamia (Bergamot) Fruit Oil",
                    "benefit": "Provides a refreshing scent and has antiseptic properties."
                },
                {
                    "name": "Pelargonium Graveolens Flower Oil",
                    "benefit": "Balances sebum and offers a pleasant fragrance."
                },
                {
                    "name": "Ribes Nigrum (Black Currant) Seed Oil",
                    "benefit": "Rich in fatty acids, providing nourishment and hydration."
                },
                {
                    "name": "Helianthus Annuus (Sunflower) Seed Oil Unsaponifiables",
                    "benefit": "Nourishing oil fraction that supports barrier repair."
                },
                {
                    "name": "Hydrolyzed Hyaluronic Acid",
                    "benefit": "Smaller molecules penetrate deeply for intense hydration."
                },
                {
                    "name": "Helianthus Annuus (Sunflower) Seed Oil",
                    "benefit": "Emollient that moisturizes and nourishes the skin."
                },
                {
                    "name": "Centella Asiatica Extract",
                    "benefit": "Soothing and healing; promotes skin regeneration."
                },
                {
                    "name": "Cardiospermum Halicacabum Flower/Leaf Extract",
                    "benefit": "Calming and anti-inflammatory properties."
                },
                {
                    "name": "Scutellaria Baicalensis Root Extract",
                    "benefit": "Antioxidant with soothing and brightening effects."
                },
                {
                    "name": "Polygonum Cuspidatum Root Extract",
                    "benefit": "Antioxidant and skin conditioner."
                },
                {
                    "name": "Citrus Unshiu Peel Extract",
                    "benefit": "Brightening agent that enhances skin radiance."
                },
                {
                    "name": "Tocopherol (Vitamin E)",
                    "benefit": "Antioxidant that protects and nourishes the skin."
                },
                {
                    "name": "Sodium Acetylated Hyaluronate",
                    "benefit": "Enhanced hydration properties for long-lasting moisture."
                },
                {
                    "name": "Rosmarinus Officinalis (Rosemary) Leaf Extract",
                    "benefit": "Antioxidant and antimicrobial; revitalizes skin."
                },
                {
                    "name": "Glycyrrhiza Glabra (Licorice) Root Extract",
                    "benefit": "Brightening and soothing; reduces redness and pigmentation."
                },
                {
                    "name": "Camellia Sinensis (Green Tea) Leaf Extract",
                    "benefit": "Antioxidant-rich; protects and soothes the skin."
                },
                {
                    "name": "Chamomilla Recutita (Matricaria) Flower Extract",
                    "benefit": "Calming and soothing; reduces redness and irritation."
                }
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
                {
                    "name": "Bifida Ferment Lysate",
                    "benefit": "A probiotic ingredient known for its soothing and repairing properties."
                },
                {
                    "name": "Acetyl Hexapeptide-8",
                    "benefit": "Known as \"Botox in a jar,\" it helps reduce the appearance of wrinkles by relaxing facial muscles."
                },
                {
                    "name": "Niacinamide (Vitamin B3)",
                    "benefit": "Improves skin elasticity and texture while evening out skin tone."
                },
                {
                    "name": "Sodium Hyaluronate (Hyaluronic Acid)",
                    "benefit": "Provides deep hydration and plumps the skin."
                },
                {
                    "name": "3-O-Ethyl Ascorbic Acid (Stable Vitamin C)",
                    "benefit": "An antioxidant that brightens skin and supports collagen production."
                },
                {
                    "name": "Phytonadione (Vitamin K)",
                    "benefit": "Helps reduce dark circles and bruising."
                },
                {
                    "name": "Tocopherol (Vitamin E)",
                    "benefit": "An antioxidant that protects against free radical damage."
                },
                {
                    "name": "Panthenol (Vitamin B5)",
                    "benefit": "Moisturizes and aids in skin repair."
                },
                {
                    "name": "Peanut Acid",
                    "benefit": "Can provide emollient properties."
                },
                {
                    "name": "Zinc PCA",
                    "benefit": "Regulates sebum production and has antibacterial properties."
                },
                {
                    "name": "Cholecalciferol (Vitamin D3)",
                    "benefit": "Supports healthy skin barrier function."
                },
                {
                    "name": "Rosa Rugosa Flower Oil",
                    "benefit": "Provides a pleasant scent and has potential calming properties."
                }
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
                {
                    "name": "Salicylic Acid",
                    "benefit": "A beta hydroxy acid (BHA) that exfoliates the skin, unclogs pores, and reduces acne."
                },
                {
                    "name": "Betaine",
                    "benefit": "A natural moisturizer that helps maintain skin's moisture balance."
                },
                {
                    "name": "Sodium Lactate",
                    "benefit": "A humectant that provides moisture and helps with the skin's pH balance."
                },
                {
                    "name": "Lactobionic Acid",
                    "benefit": "A polyhydroxy acid (PHA) that gently exfoliates while providing anti-aging and antioxidant benefits."
                },
                {
                    "name": "Pentylene Glycol",
                    "benefit": "A moisturizing agent with antimicrobial properties that also enhances the absorption of other ingredients."
                },
                {
                    "name": "Portulaca Oleracea Extract",
                    "benefit": "Offers soothing and anti-inflammatory benefits; rich in antioxidants."
                },
                {
                    "name": "Sesame Amino Acids",
                    "benefit": "Provides conditioning and nourishing benefits to the skin."
                },
                {
                    "name": "Salix Alba (Willow) Bark Extract",
                    "benefit": "Contains salicin, which can help with exfoliation and has anti-inflammatory properties."
                },
                {
                    "name": "Camellia Sinensis Leaf Extract",
                    "benefit": "Rich in antioxidants, it offers soothing and anti-aging properties."
                },
                {
                    "name": "Xanthan Gum",
                    "benefit": "A natural thickener that helps stabilize formulations and improve texture."
                },
                {
                    "name": "Allantoin",
                    "benefit": "Known for its skin-soothing, anti-irritating, and healing properties."
                },
                {
                    "name": "Dipotassium Glycyrrhizate",
                    "benefit": "Derived from licorice root, this ingredient soothes irritation and reduces inflammation."
                },
                {
                    "name": "Zinc PCA",
                    "benefit": "Helps control excess oil production and acts as an antibacterial agent."
                },
                {
                    "name": "Asiaticoside",
                    "benefit": "A compound found in Centella Asiatica that aids in skin healing and collagen formation."
                },
                {
                    "name": "Centella Asiatica Extract",
                    "benefit": "Renowned for its healing, soothing, and anti-inflammatory properties."
                },
                {
                    "name": "Madecassoside",
                    "benefit": "Another active from Centella Asiatica, it helps calm inflammation and promotes skin repair."
                },
                {
                    "name": "Sodium Hyaluronate (Hyaluronic Acid)",
                    "benefit": "A powerful humectant that hydrates the skin by drawing moisture from the environment."
                }
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
                {
                    "name": "Bifida Ferment Lysate",
                    "benefit": "A probiotic ingredient that strengthens the skin barrier, improves skin resilience, and reduces sensitivity."
                },
                {
                    "name": "Acetyl Hexapeptide-8",
                    "benefit": "Anti-Aging Peptide, Skin Firming."
                },
                {
                    "name": "Alpha-Arbutin",
                    "benefit": "A skin-brightening agent that reduces the appearance of dark spots and pigmentation."
                },
                {
                    "name": "Sodium Hyaluronate (Hyaluronic Acid)",
                    "benefit": "Hydrating and Plumping Agent."
                },
                {
                    "name": "3-O-Ethyl Ascorbic Acid",
                    "benefit": "Stable Vitamin C Derivative, Brightening."
                },
                {
                    "name": "Glutathione",
                    "benefit": "A powerful antioxidant that helps brighten the skin and fight free radicals."
                },
                {
                    "name": "Rosa Rugosa Flower Oil",
                    "benefit": "Natural oil with aromatic properties, offering moisturizing and soothing benefits."
                }
            ],
            "swatches": ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28"],
            "volume": "30ml",
            "slug": "whitening-serum-30ml"
        },
        {
            "id": 8,
            "name": "Need's Hyaluronic Fairness Night Cream *50ml",
            "price": 6990,
            "originalPrice": 7490,
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
                {
                    "name": "Butyrospermum Parkii (Shea Butter)",
                    "benefit": "Moisturizes and soothes the skin, rich in fatty acids and vitamins."
                },
                {
                    "name": "Simmondsia Jojoba Butter",
                    "benefit": "Enhances skin's barrier repair properties and ability to heal from damage."
                },
                {
                    "name": "Simmondsia Chinensis (Jojoba) Seed Oil",
                    "benefit": "Mimics natural skin oils, moisturizing and restoring the skin barrier."
                },
                {
                    "name": "Isononyl Isononanoate",
                    "benefit": "Emollient that softens skin and provides a smooth, non-greasy feel."
                },
                {
                    "name": "Squalane",
                    "benefit": "Moisturizer that mimics skin's natural oils, improving elasticity and moisture balance."
                },
                {
                    "name": "Alumina Magnesium",
                    "benefit": "Used as an abrasive, absorbent and anti-caking agent."
                },
                {
                    "name": "Stearic Acid",
                    "benefit": "Acts as an emulsifier and surfactant, also provides a protective barrier."
                },
                {
                    "name": "Tocopherol (Vitamin E)",
                    "benefit": "Antioxidant that protects the skin from free radical damage."
                },
                {
                    "name": "Silybum Marianum (Milk Thistle) Extract",
                    "benefit": "Antioxidant and anti-inflammatory that protects the skin from environmental stressors."
                },
                {
                    "name": "Vaccinium Angustifolium (Blueberry) Fruit Extract",
                    "benefit": "Rich in antioxidants, helps protect skin from signs of aging and damage."
                },
                {
                    "name": "Allantoin",
                    "benefit": "Soothes and protects the skin, promotes healing and regeneration."
                },
                {
                    "name": "Hyaluronic Acid Sodium Hyaluronate",
                    "benefit": "Helps retain moisture, creating a plumping effect on the skin."
                },
                {
                    "name": "Retinol",
                    "benefit": "A form of Vitamin A that accelerates cell renewal and improves skin tone and texture."
                },
                {
                    "name": "Glutathione",
                    "benefit": "A powerful antioxidant that can lighten skin by converting melanin to a lighter color and deactivating the enzyme tyrosinase."
                }
            ],
            "swatches": ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC"],
            "volume": "50ml",
            "slug": "needs-hyaluronic-fairness-night-cream-50ml"
        },
        {
            "id": 9,
            "name": "COMPLETE Brightening Day Cream",
            "price": 6490,
            "originalPrice": 6990,
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
                {
                    "name": "Niacinamide",
                    "benefit": "Improves skin elasticity, reduces redness and blotchiness, and enhances the skin barrier."
                },
                {
                    "name": "3-O-Ethyl Ascorbic Acid",
                    "benefit": "A stable form of Vitamin C that brightens skin and boosts collagen production."
                },
                {
                    "name": "Dimethicone Phenyl Vinyl Dimethicone Crosspolymer",
                    "benefit": "Provides a silky texture, acts as a barrier to lock in moisture."
                },
                {
                    "name": "Butyrospermum Parkii (Shea Butter)",
                    "benefit": "Hydrates and nourishes the skin with its rich fatty acids."
                },
                {
                    "name": "Portulaca Oleracea Extract",
                    "benefit": "Known for its soothing and anti-inflammatory properties."
                },
                {
                    "name": "Simmondsia (Jojoba) Seed Oil",
                    "benefit": "Moisturizes and balances sebum production without clogging pores."
                },
                {
                    "name": "Piper Methysticum Root Extract",
                    "benefit": "Provides calming and soothing effects on the skin."
                },
                {
                    "name": "Helianthus Annuus (Sunflower) Seed Oil",
                    "benefit": "Rich in vitamins and fatty acids, it nourishes and protects the skin."
                },
                {
                    "name": "Tocopherol (Vitamin E)",
                    "benefit": "An antioxidant that protects against free radicals and supports skin health."
                },
                {
                    "name": "Beta-Carotene",
                    "benefit": "An antioxidant that can enhance skin tone and protect from environmental damage."
                },
                {
                    "name": "Panthenol",
                    "benefit": "Also known as Vitamin B5; hydrates and soothes the skin, aiding in repair."
                },
                {
                    "name": "Hydroxyacetophenone",
                    "benefit": "Provides antioxidant benefits and acts as a stabilizer."
                },
                {
                    "name": "Sodium Hyaluronate (Hyaluronic Acid)",
                    "benefit": "Delivers deep hydration and plumps the skin."
                },
                {
                    "name": "Sophora Angustifolia Root Extract",
                    "benefit": "Offers brightening and anti-inflammatory properties."
                },
                {
                    "name": "Salvia Miltiorrhiza Root Extract",
                    "benefit": "Provides antioxidant and anti-inflammatory benefits."
                },
                {
                    "name": "Thymus Vulgaris (Thyme) Leaf Extract",
                    "benefit": "Known for its antimicrobial and antioxidant properties."
                },
                {
                    "name": "Coptis Chinensis Root Extract",
                    "benefit": "Offers antibacterial and anti-inflammatory effects."
                }
            ],
            "swatches": ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726"],
            "volume": "50ml",
            "slug": "complete-brightening-day-cream-50ml"
        },
        {
            "id": 10,
            "name": "Men's Facial Cleanser",
            "price": 1490,
            "originalPrice": 1990,
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
                {
                    "name": "Aloe Barbadensis Leaf Water",
                    "benefit": "Offers soothing and moisturizing properties, helping to calm irritated skin."
                },
                {
                    "name": "Sodium Cocoyl Glutamate",
                    "benefit": "A gentle cleanser derived from coconut oil and glutamic acid, ideal for sensitive skin."
                },
                {
                    "name": "Menthol",
                    "benefit": "Provides a cooling sensation on the skin, offering a refreshing feeling."
                },
                {
                    "name": "Sodium Polyglutamate",
                    "benefit": "A powerful humectant that retains moisture and improves skin elasticity."
                },
                {
                    "name": "Jojoba Esters",
                    "benefit": "Provide emollient properties, mimicking skin's natural oils to enhance smoothness and moisture."
                },
                {
                    "name": "Allantoin",
                    "benefit": "Known for its soothing and skin-protecting properties."
                },
                {
                    "name": "Panthenol (Pro-Vitamin B5)",
                    "benefit": "Provides moisturizing, soothing, and healing properties."
                },
                {
                    "name": "Sodium Hyaluronate (Hyaluronic Acid)",
                    "benefit": "A potent humectant that hydrates the skin by attracting and retaining moisture."
                }
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "mens-facial-cleanser-100ml"
        },
        {
            "id": 11,
            "name": "Hyaluronic Face Wash Cleanser",
            "price": 1490,
            "originalPrice": 1990,
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
                {
                    "name": "Methylpropanediol",
                    "benefit": "Enhances the absorption of ingredients and improves skin feel."
                },
                {
                    "name": "Niacinamide",
                    "benefit": "Boosts skin brightness, reduces inflammation, and helps improve skin barrier function."
                },
                {
                    "name": "1,2-Hexanediol",
                    "benefit": "Works as a humectant and solvent, also acts as a preservative-boosting agent."
                },
                {
                    "name": "Hydroxyacetophenone",
                    "benefit": "Antioxidant properties and can also function as a soothing agent."
                },
                {
                    "name": "Hexylene Glycol",
                    "benefit": "Functions as a solvent and viscosity agent, also has moisturizing benefits."
                },
                {
                    "name": "Glycine",
                    "benefit": "An amino acid that helps condition the skin."
                },
                {
                    "name": "Betaine",
                    "benefit": "Protects cells from environmental stress and controls moisture balance."
                },
                {
                    "name": "Serine",
                    "benefit": "An amino acid that helps promote skin's natural moisturizing factors."
                },
                {
                    "name": "Glutamic Acid",
                    "benefit": "Helps maintain skin pH balance and hydration."
                },
                {
                    "name": "Allantoin",
                    "benefit": "Soothes irritated skin and stimulates cell regeneration."
                },
                {
                    "name": "Adenosine",
                    "benefit": "Provides anti-wrinkle benefits by energizing the skin's cellular functions."
                },
                {
                    "name": "Aspartic Acid",
                    "benefit": "Essential amino acids that help build skin protein and enhance skin resilience."
                },
                {
                    "name": "Citrus Aurantium Bergamia (Bergamot) Fruit Oil",
                    "benefit": "Provides fragrance and has antibacterial properties."
                },
                {
                    "name": "Ribes Nigrum (Black Currant) Seed Oil",
                    "benefit": "Rich in antioxidants and gamma-linolenic acid which help nourish and soothe skin."
                },
                {
                    "name": "Hyaluronic Acid (Sodium Hyaluronate)",
                    "benefit": "A trio of hyaluronic acids that deeply hydrate, lock in moisture, and plump the skin for a smooth and supple appearance."
                },
                {
                    "name": "Helianthus Annuus (Sunflower) Seed Oil",
                    "benefit": "Nourishes and softens the skin, providing essential fatty acids to maintain a healthy barrier."
                },
                {
                    "name": "Centella Asiatica Extract",
                    "benefit": "Promotes collagen production and reduces inflammation."
                },
                {
                    "name": "Cardiospermum Halicacabum Flower/Leaf Extract",
                    "benefit": "Anti-inflammatory properties help calm sensitive skin."
                },
                {
                    "name": "Scutellaria Baicalensis Root Extract",
                    "benefit": "These botanical extracts provide various benefits such as antioxidant protection, skin-soothing, and brightening effects."
                },
                {
                    "name": "Citrus Unshiu Peel Extract",
                    "benefit": "These botanical extracts provide various benefits such as antioxidant protection, skin-soothing, and brightening effects."
                },
                {
                    "name": "Glycyrrhiza Glabra (Licorice) Root Extract",
                    "benefit": "These botanical extracts provide various benefits such as antioxidant protection, skin-soothing, and brightening effects."
                },
                {
                    "name": "Camellia Sinensis Leaf Extract",
                    "benefit": "Provides antioxidant benefits and skin-soothing properties."
                },
                {
                    "name": "Chamomilla Recutita (Matricaria) Flower Extract",
                    "benefit": "Known for its soothing, calming, and anti-inflammatory properties."
                }
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "hyaluronic-face-wash-cleanser-100ml"
        },
        {
            "id": 12,
            "name": "Acne Solution Face Wash Cleanser",
            "price": 1490,
            "originalPrice": 1990,
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
                {
                    "name": "Aloe Barbadensis Leaf Water",
                    "benefit": "Offers soothing and moisturizing properties, helping to calm irritated skin."
                },
                {
                    "name": "Sodium Cocoyl Glycinate",
                    "benefit": "A mild surfactant that cleanses the skin without stripping its natural oils."
                },
                {
                    "name": "Sodium Cocoyl Glutamate",
                    "benefit": "A gentle cleanser derived from coconut oil and glutamic acid, ideal for sensitive skin."
                },
                {
                    "name": "Butylene Glycol",
                    "benefit": "A humectant that helps keep skin hydrated and enhances the absorption of other ingredients."
                },
                {
                    "name": "Avocado Oil PEG-8 Esters",
                    "benefit": "Emollients that provide moisturization and improve skin texture."
                },
                {
                    "name": "Avocado Oil PEG-11 Esters",
                    "benefit": "Similar to PEG-8 esters, these offer emollient properties for skin softening."
                },
                {
                    "name": "Persea Gratissima (Avocado) Fruit Extract",
                    "benefit": "Rich in fatty acids and vitamins, it nourishes and hydrates the skin."
                },
                {
                    "name": "Salicylic Acid",
                    "benefit": "A beta-hydroxy acid (BHA) that exfoliates the skin and helps unclog pores, reducing acne."
                },
                {
                    "name": "Sodium Polyglutamate",
                    "benefit": "A powerful humectant that retains moisture and improves skin elasticity. A moisturizing ingredient that helps to lock in hydration enhancing skin softness and smoothness."
                },
                {
                    "name": "Niacinamide",
                    "benefit": "A form of Vitamin B3 that brightens skin, improves elasticity, and enhances barrier function."
                },
                {
                    "name": "Allantoin",
                    "benefit": "Known for its soothing and skin-protecting properties."
                },
                {
                    "name": "Camellia Sinensis Leaf Extract",
                    "benefit": "Rich in antioxidants, this extract helps soothe and protect the skin."
                },
                {
                    "name": "Panthenol (Vitamin B5)",
                    "benefit": "Provides moisturizing, soothing, and healing properties."
                },
                {
                    "name": "Glycolic Acid",
                    "benefit": "An alpha hydroxy acid (AHA) that exfoliates the skin, improving texture and tone."
                },
                {
                    "name": "Punica Granatum",
                    "benefit": "Offers antioxidant benefits and supports skin health."
                },
                {
                    "name": "Sodium Hyaluronate",
                    "benefit": "A potent humectant that hydrates the skin by attracting and retaining moisture."
                }
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "acne-solution-face-wash-cleanser-100ml"
        },
        {
            "id": 13,
            "name": "Vitamin C Face Wash Cleanser",
            "price": 1490,
            "originalPrice": 1990,
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
                {
                    "name": "Sodium Cocoyl Glycinate",
                    "benefit": "A mild surfactant that helps in cleansing and foaming."
                },
                {
                    "name": "Lauryl Glucoside",
                    "benefit": "A gentle surfactant derived from glucose and coconut oil, used for cleansing."
                },
                {
                    "name": "PEG-150 Pentaerythrityl Tetrastearate",
                    "benefit": "A thickening agent that helps stabilize emulsions."
                },
                {
                    "name": "Ascorbic Acid (Vitamin C)",
                    "benefit": "An antioxidant that brightens the skin and fights free radicals."
                },
                {
                    "name": "Butylene Glycol",
                    "benefit": "A humectant that adds moisture and can improve the texture of the product."
                },
                {
                    "name": "Phenoxyethanol",
                    "benefit": "A preservative used to prevent microbial growth."
                },
                {
                    "name": "Sodium Polyglutamate",
                    "benefit": "Hydrates and improves skin elasticity."
                },
                {
                    "name": "Honey",
                    "benefit": "Moisturizes, soothes, and has antibacterial properties."
                },
                {
                    "name": "Touhi Ekisu (Japanese Cedar Extract)",
                    "benefit": "Known for its soothing and antioxidant properties."
                },
                {
                    "name": "1,2-Hexanediol",
                    "benefit": "Acts as a humectant and emollient."
                },
                {
                    "name": "Panthenol (Pro-Vitamin B5)",
                    "benefit": "Moisturizes and aids in skin repair."
                },
                {
                    "name": "Panax Ginseng Root Extract",
                    "benefit": "Has antioxidant and revitalizing properties."
                },
                {
                    "name": "Sodium Hyaluronate (Hyaluronic Acid)",
                    "benefit": "Provides intense hydration and plumps the skin."
                }
            ],
            "swatches": ["#808080", "#4682B4", "#90EE90", "#FFA500"],
            "volume": "100ml",
            "slug": "vitamin-c-face-wash-cleanser-100ml"
        },
    ]
};

export default mockData;



