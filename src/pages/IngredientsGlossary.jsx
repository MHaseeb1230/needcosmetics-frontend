import React, { useMemo, useState } from 'react';
import { Filter } from 'lucide-react';

// Expanded ingredients list based on KIKO website
const INGREDIENTS = [
    {
        id: 'hyalu-rose',
        name: 'Hyalu + Rose Complex',
        actions: ['Hydrating'],
        tags: ['Hyaluronic Acid', 'Rose'],
        description: 'A unique combination of hyaluronic acid and Italian rose extract, which leaves skin feeling comfortable and hydrated.',
        image: '/images/glossary/hyalu-rose.jpg', // Placeholder - you can add actual images
    },
    {
        id: 'aloe',
        name: 'Aloe',
        actions: ['Hydrating'],
        tags: ['Aloe'],
        description: 'A classic skincare ingredient, known and valued for its soothing and hydrating properties, perfect for making skin feel comfortable and fresh.',
        image: '/images/glossary/aloe.jpg',
    },
    {
        id: 'hyaluronic-acid',
        name: 'Hyaluronic Acid',
        actions: ['Elasticising', 'Hydrating'],
        tags: ['Hyaluronic Acid'],
        description: 'One of the most loved, sought-after and versatile ingredients in the beauty industry, from make-up to skincare products.',
        image: '/images/glossary/hyaluronic-acid.jpg',
    },
    {
        id: 'amino-acids',
        name: 'Amino Acids',
        actions: ['Elasticising', 'Hydrating'],
        tags: ['Amino Acids'],
        description: 'Essential molecules for the skin, known to help maintain its natural balance, firmness and hydration level.',
        image: '/images/glossary/amino-acids.jpg',
    },
    {
        id: 'shea-butter',
        name: 'Shea Butter',
        actions: ['Hydrating', 'Protective'],
        tags: ['Shea Butter'],
        description: 'A naturally rich and nourishing ingredient known to leave skin feeling soft and velvety.',
        image: '/images/glossary/shea-butter.jpg',
    },
    {
        id: 'argan-oil',
        name: 'Argan Oil',
        actions: ['Elasticising'],
        tags: ['Argan Oil'],
        description: 'A valuable natural ingredient rich in lipids, known to help leave skin soft and radiant.',
        image: '/images/glossary/argan-oil.jpg',
    },
    {
        id: 'cottonseed-oil',
        name: 'Cottonseed Oil',
        actions: [],
        tags: ['Cottonseed Oil'],
        description: 'A light oil naturally rich in fatty acids, valued for its delicate and pleasantly comfortable feel when applied to skin.',
        image: '/images/glossary/cottonseed-oil.jpg',
    },
    {
        id: 'linseed-oil',
        name: 'Linseed Oil',
        actions: [],
        tags: ['Linseed Oil'],
        description: 'A plant-based oil rich in essential fatty acids, known for its silky texture and the soft feel it gives skin.',
        image: '/images/glossary/linseed-oil.jpg',
    },
    {
        id: 'jojoba-oil',
        name: 'Jojoba Oil',
        actions: ['Hydrating'],
        tags: ['Jojoba Oil'],
        description: 'A light, balanced plant-based oil, renowned for its compatibility with skin and the pleasantly soft feel it provides.',
        image: '/images/glossary/jojoba-oil.jpg',
    },
    {
        id: 'peptides',
        name: 'Peptides',
        actions: ['Elasticising'],
        tags: ['Peptides'],
        description: 'Small amino acid chains renowned in the cosmetics industry for the support they provide and ability to make skin visibly smoother and more even.',
        image: '/images/glossary/peptides.jpg',
    },
    {
        id: 'vitamin-c',
        name: 'Vitamin C',
        actions: ['Protective'],
        tags: ['Vitamin C'],
        description: 'A powerful antioxidant known for its ability to protect skin from free radicals and to help boost facial radiance.',
        image: '/images/glossary/vitamin-c.jpg',
    },
    {
        id: 'niacinamide',
        name: 'Niacinamide (Vitamin B3)',
        actions: ['Protective'],
        tags: ['Niacinamide'],
        description: 'A multi-purpose ingredient valued for its role in improving the appearance of the skin and giving it an even, radiant appearance.',
        image: '/images/glossary/niacinamide.jpg',
    },
    {
        id: 'panthenol',
        name: 'Panthenol (Provitamin B5)',
        actions: ['Hydrating'],
        tags: ['Panthenol'],
        description: 'Known for its ability to help keep skin soft and smooth, it\'s also a popular ingredient for its hydrating and soothing properties.',
        image: '/images/glossary/panthenol.jpg',
    },
    {
        id: 'vitamin-e',
        name: 'Vitamin E (Tocopherol)',
        actions: ['Protective'],
        tags: ['Vitamin E'],
        description: 'Natural antioxidant that helps protect skin from free radicals and keep it soft and radiant.',
        image: '/images/glossary/vitamin-e.jpg',
    },
    {
        id: 'fructose',
        name: 'Fructose',
        actions: ['Elasticising', 'Hydrating'],
        tags: ['Fructose'],
        description: 'A natural sugar with hydrating properties, valued in cosmetics for its ability to help make skin softer and more comfortable.',
        image: '/images/glossary/fructose.jpg',
    },
    {
        id: 'glucose',
        name: 'Glucose',
        actions: ['Hydrating'],
        tags: ['Glucose'],
        description: 'A natural sugar with hydrating and nourishing properties, ideal for making skin softer and more comfortable.',
        image: '/images/glossary/glucose.jpg',
    },
    {
        id: 'xylitol',
        name: 'Xylitol',
        actions: ['Hydrating', 'Protective'],
        tags: ['Xylitol'],
        description: 'A sugar of natural origin known for its hydrating properties, ideal for making skin softer and more comfortable.',
        image: '/images/glossary/xylitol.jpg',
    },
    {
        id: 'retinol',
        name: 'Retinol (Vitamin A - Retinyl Palmitate)',
        actions: ['Elasticising'],
        tags: ['Retinol'],
        description: 'A Vitamin A derivative known for its smoothing and anti-ageing effect, popular in skincare for delivering a more even and radiant appearance.',
        image: '/images/glossary/retinol.jpg',
    },
    {
        id: 'sorbitol',
        name: 'Sorbitol',
        actions: ['Protective'],
        tags: ['Sorbitol'],
        description: 'A sugar of natural origin known for its hydrating and softening properties, ideal for making skin comfortable and soft.',
        image: '/images/glossary/sorbitol.jpg',
    },
];

// Calculate filter counts
const getActionCount = (action) => {
    return INGREDIENTS.filter(ing => ing.actions.includes(action)).length;
};

const getIngredientCount = (ingredientName) => {
    return INGREDIENTS.filter(ing => ing.tags.includes(ingredientName)).length;
};

const ACTION_FILTERS = [
    { name: 'Hydrating', count: getActionCount('Hydrating') },
    { name: 'Elasticising', count: getActionCount('Elasticising') },
    { name: 'Protective', count: getActionCount('Protective') },
];

const INGREDIENT_FILTERS = [
    { name: 'Aloe', count: getIngredientCount('Aloe') },
    { name: 'Hyaluronic Acid', count: getIngredientCount('Hyaluronic Acid') },
    { name: 'Shea Butter', count: getIngredientCount('Shea Butter') },
    { name: 'Vitamin C', count: getIngredientCount('Vitamin C') },
    { name: 'Peptides', count: getIngredientCount('Peptides') },
    { name: 'Niacinamide', count: getIngredientCount('Niacinamide') },
    { name: 'Panthenol', count: getIngredientCount('Panthenol') },
    { name: 'Vitamin E', count: getIngredientCount('Vitamin E') },
];

const IngredientsGlossary = () => {
    const [selectedActions, setSelectedActions] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const filteredIngredients = useMemo(() => {
        return INGREDIENTS.filter((item) => {
            const matchesAction =
                selectedActions.length === 0 ||
                selectedActions.some((action) => item.actions.includes(action));
            const matchesIngredient =
                selectedIngredients.length === 0 ||
                selectedIngredients.some((ing) => item.tags.includes(ing));
            return matchesAction && matchesIngredient;
        });
    }, [selectedActions, selectedIngredients]);

    const toggleAction = (action) => {
        setSelectedActions((prev) =>
            prev.includes(action)
                ? prev.filter((a) => a !== action)
                : [...prev, action]
        );
    };

    const toggleIngredient = (ingredient) => {
        setSelectedIngredients((prev) =>
            prev.includes(ingredient)
                ? prev.filter((i) => i !== ingredient)
                : [...prev, ingredient]
        );
    };

    const clearFilters = () => {
        setSelectedActions([]);
        setSelectedIngredients([]);
    };

    const hasActiveFilters = selectedActions.length > 0 || selectedIngredients.length > 0;

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <div className="max-w-3xl">
                        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-gray-600 mb-4 uppercase">
                            Ingredients Glossary
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                            Ingredients Glossary
                        </h1>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            By NEEDS
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content: Sidebar + Grid */}
            <section className="py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar - Filters */}
                        <aside className="w-full lg:w-80 flex-shrink-0">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                                {/* FILTERS Button */}
                                <button className="w-full bg-pink-100 hover:bg-pink-200 text-gray-900 font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-lg mb-6 flex items-center justify-center gap-2 transition-colors">
                                    <Filter size={16} />
                                    FILTERS
                                </button>

                                {/* BY ACTION */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                                            BY ACTION
                                        </h2>
                                        {selectedActions.length > 0 && (
                                            <button
                                                onClick={clearFilters}
                                                className="text-xs text-gray-500 hover:text-gray-700 underline"
                                            >
                                                Clear
                                            </button>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        {ACTION_FILTERS.map((filter) => (
                                            <label
                                                key={filter.name}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedActions.includes(filter.name)}
                                                    onChange={() => toggleAction(filter.name)}
                                                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                                                />
                                                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                                    {filter.name} ({filter.count})
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* BY INGREDIENT */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                                            BY INGREDIENT
                                        </h2>
                                        {selectedIngredients.length > 0 && (
                                            <button
                                                onClick={clearFilters}
                                                className="text-xs text-gray-500 hover:text-gray-700 underline"
                                            >
                                                Clear
                                            </button>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        {INGREDIENT_FILTERS.map((filter) => (
                                            <label
                                                key={filter.name}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedIngredients.includes(filter.name)}
                                                    onChange={() => toggleIngredient(filter.name)}
                                                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                                                />
                                                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                                                    {filter.name} ({filter.count})
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Right Content - Ingredient Cards Grid */}
                        <div className="flex-1">
                            {hasActiveFilters && (
                                <p className="text-xs text-gray-600 mb-6">
                                    Showing{' '}
                                    <span className="font-semibold">
                                        {filteredIngredients.length}
                                    </span>{' '}
                                    ingredient
                                    {filteredIngredients.length === 1 ? '' : 's'}
                                </p>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                {filteredIngredients.map((item) => (
                                    <article
                                        key={item.id}
                                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                    >
                                        {/* Image */}
                                        <div className="aspect-square bg-gray-100 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    // Fallback to placeholder if image doesn't exist
                                                    e.target.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(item.name);
                                                }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 md:p-6">
                                            {/* Tags */}
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                {item.tags.map((tag, idx) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[10px] uppercase tracking-[0.18em] text-gray-700"
                                                    >
                                                        {idx > 0 && <span className="mx-1">★</span>}
                                                        #{tag.toUpperCase().replace(/\s+/g, '')}
                                                    </span>
                                                ))}
                                                {item.actions.map((action, idx) => (
                                                    <span
                                                        key={action}
                                                        className="text-[10px] uppercase tracking-[0.18em] text-gray-500"
                                                    >
                                                        {idx > 0 || item.tags.length > 0 ? <span className="mx-1">★</span> : ''}
                                                        #{action.toUpperCase()}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                                                {item.name}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed mb-5">
                                                {item.description}
                                            </p>

                                            {/* Find out more button */}
                                            <button
                                                type="button"
                                                className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded transition-colors"
                                            >
                                                FIND OUT MORE →
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {filteredIngredients.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-gray-600 mb-4">No ingredients found matching your filters.</p>
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-gray-900 underline hover:text-gray-700"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IngredientsGlossary;
