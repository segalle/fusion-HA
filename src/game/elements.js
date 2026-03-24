// All elements in the game
export const ELEMENTS = {
  // ============================================
  // STARTERS (4)
  // ============================================
  earth:           { name: 'Earth',           emoji: '🌍', starter: true, tier: 0, description: 'The solid ground beneath it all' },
  water:           { name: 'Water',           emoji: '💧', starter: true, tier: 0, description: 'The essence of life' },
  fire:            { name: 'Fire',            emoji: '🔥', starter: true, tier: 0, description: 'Primal heat and destruction' },
  air:             { name: 'Air',             emoji: '💨', starter: true, tier: 0, description: 'The invisible breath of the world' },

  // ============================================
  // TIER 1: Basic combinations (8)
  // ============================================
  mud:             { name: 'Mud',             emoji: '🟫', tier: 1, description: 'Wet earth, fertile and formless' },
  lava:            { name: 'Lava',            emoji: '🌋', tier: 1, description: 'Molten rock from deep below' },
  energy:          { name: 'Energy',          emoji: '⚡', tier: 1, description: 'The driving force of all change' },
  rain:            { name: 'Rain',            emoji: '🌧️', tier: 1, description: 'Water falling from the sky' },
  ocean:           { name: 'Ocean',           emoji: '🌊', tier: 1, description: 'A vast body of water' },
  steam:           { name: 'Steam',           emoji: '♨️', tier: 1, description: 'Water transformed by heat' },
  sun:             { name: 'Sun',             emoji: '☀️', tier: 1, description: 'The star that fuels everything' },
  storm:           { name: 'Storm',           emoji: '🌪️', tier: 1, description: 'Nature\'s fury unleashed' },

  // ============================================
  // TIER 2: Nature & environment (7 original + 10 new = 17)
  // ============================================
  swamp:           { name: 'Swamp',           emoji: '🏝️', tier: 2, description: 'Where land and water blur together' },
  rock:            { name: 'Rock',            emoji: '🪨', tier: 2, description: 'Hardened from ancient lava' },
  plant:           { name: 'Plant',           emoji: '🌱', tier: 2, description: 'The first green life' },
  lightning:       { name: 'Lightning',       emoji: '🌩️', tier: 2, description: 'Electric fire from the sky' },
  tree:            { name: 'Tree',            emoji: '🌳', tier: 2, description: 'A towering pillar of life' },
  mountain:        { name: 'Mountain',        emoji: '🏔️', tier: 2, description: 'Rock pushed skyward over eons' },
  flower:          { name: 'Flower',          emoji: '🌸', tier: 2, description: 'Beauty that attracts life' },
  ice:             { name: 'Ice',             emoji: '🧊', tier: 2, description: 'Water frozen solid by cold' },
  clay:            { name: 'Clay',            emoji: '🏺', tier: 2, description: 'Earth shaped by patience' },
  sand:            { name: 'Sand',            emoji: '⏳', tier: 2, description: 'Rock ground to grains by time' },
  lake:            { name: 'Lake',            emoji: '🏞️', tier: 2, description: 'Still waters run deep' },
  tide_pool:       { name: 'Tide Pool',       emoji: '🐚', tier: 2, description: 'A tiny ocean world' },
  time:            { name: 'Time',            emoji: '⏰', tier: 2, description: 'The river that carries all things' },
  gunpowder:       { name: 'Gunpowder',       emoji: '🧨', tier: 2, description: 'A dangerous powder that changed warfare' },
  cave:            { name: 'Cave',            emoji: '🕳️', tier: 2, description: 'Darkness carved from stone' },
  island:          { name: 'Island',          emoji: '🏝️', tier: 2, description: 'Land embraced by sea' },
  snow:            { name: 'Snow',            emoji: '❄️', tier: 2, description: 'Frozen crystals drifting down' },

  // ============================================
  // TIER 3: Complex nature & early materials (12)
  // ============================================
  primordial_soup: { name: 'Primordial Soup', emoji: '🍲', tier: 3, description: 'The warm chemical broth where life began' },
  amino_acid:      { name: 'Amino Acid',      emoji: '🧪', tier: 3, description: 'Building blocks of life' },
  dna:             { name: 'DNA',             emoji: '🧬', tier: 3, description: 'The code of life itself' },
  cell:            { name: 'Cell',            emoji: '🧫', tier: 3, description: 'The first living unit' },
  moss:            { name: 'Moss',            emoji: '🌿', tier: 3, description: 'A soft green carpet on stone' },
  fern:            { name: 'Fern',            emoji: '☘️', tier: 3, description: 'Ancient fronds unfurling' },
  seed:            { name: 'Seed',            emoji: '🫘', tier: 3, description: 'Potential wrapped in a tiny shell' },
  fruit:           { name: 'Fruit',           emoji: '🍎', tier: 3, description: 'Nature\'s sweet reward' },
  fungi:           { name: 'Fungi',           emoji: '🍄', tier: 3, description: 'Neither plant nor animal' },
  grass:           { name: 'Grass',           emoji: '🌾', tier: 3, description: 'A green blanket over the earth' },
  forest:          { name: 'Forest',          emoji: '🌲', tier: 3, description: 'Trees gathered in community' },
  crystal:         { name: 'Crystal',         emoji: '💎', tier: 3, description: 'Minerals aligned in perfect order' },
  desert:          { name: 'Desert',          emoji: '🏜️', tier: 3, description: 'Endless sand and scorching heat' },
  copper:          { name: 'Copper',          emoji: '🥉', tier: 3, description: 'The first metal shaped by humans' },
  iron:            { name: 'Iron',            emoji: '⛓️', tier: 3, description: 'Strong metal from the earth' },
  gold:            { name: 'Gold',            emoji: '🥇', tier: 3, description: 'Precious and eternal' },
  boat:            { name: 'Boat',            emoji: '🛶', tier: 3, description: 'Floating on adventure' },
  spear:           { name: 'Spear',           emoji: '🔱', tier: 3, description: 'A sharp point for hunting' },
  pottery:         { name: 'Pottery',         emoji: '🫖', tier: 3, description: 'Earth shaped and fired into form' },
  paper:           { name: 'Paper',           emoji: '📜', tier: 3, description: 'A surface for thoughts' },

  // ============================================
  // TIER 4: Intermediate materials & environments (8)
  // ============================================
  bacteria:        { name: 'Bacteria',        emoji: '🦠', tier: 4, description: 'Tiny but mighty survivors' },
  algae:           { name: 'Algae',           emoji: '🟢', tier: 4, description: 'Green life in the water' },
  plankton:        { name: 'Plankton',        emoji: '🫧', tier: 4, description: 'Drifters of the deep' },
  worm:            { name: 'Worm',            emoji: '🪱', tier: 4, description: 'Life burrows into the earth' },
  jungle:          { name: 'Jungle',          emoji: '🌴', tier: 4, description: 'Dense, wild, and teeming with life' },
  bronze:          { name: 'Bronze',          emoji: '🔔', tier: 4, description: 'An alloy that launched an age' },
  steel:           { name: 'Steel',           emoji: '🗡️', tier: 4, description: 'Iron perfected by fire' },
  glass:           { name: 'Glass',           emoji: '🔍', tier: 4, description: 'Sand transformed by flame' },
  brick:           { name: 'Brick',           emoji: '🧱', tier: 4, description: 'Building block of civilization' },
  compass:         { name: 'Compass',         emoji: '🧭', tier: 4, description: 'Always pointing the way' },
  steam_engine:    { name: 'Steam Engine',    emoji: '🚂', tier: 4, description: 'Steam harnessed for power' },
  electricity:     { name: 'Electricity',     emoji: '💡', tier: 4, description: 'Captured lightning in a wire' },
  telescope:       { name: 'Telescope',       emoji: '🔭', tier: 5, description: 'Bringing the stars closer' },

  // ============================================
  // TIER 5: Sea & early land life (3 original + 5 new = 8)
  // ============================================
  fish:            { name: 'Fish',            emoji: '🐟', tier: 5, description: 'Vertebrate life takes shape' },
  jellyfish:       { name: 'Jellyfish',       emoji: '🪼', tier: 5, description: 'Ancient drifters of the sea' },
  insect:          { name: 'Insect',          emoji: '🐛', tier: 5, description: 'Six-legged conquerors of land' },
  coral:           { name: 'Coral',           emoji: '🪸', tier: 5, description: 'Living rock beneath the waves' },
  radio:           { name: 'Radio',           emoji: '📻', tier: 5, description: 'Voices riding invisible waves' },

  // ============================================
  // TIER 6: Vertebrate evolution & sea creatures (6)
  // ============================================
  amphibian:       { name: 'Amphibian',       emoji: '🐸', tier: 6, description: 'First to walk on land' },
  reptile:         { name: 'Reptile',         emoji: '🦎', tier: 6, description: 'Cold-blooded land dwellers' },
  egg:             { name: 'Egg',             emoji: '🥚', tier: 6, description: 'Life wrapped in a shell' },
  shark:           { name: 'Shark',           emoji: '🦈', tier: 6, description: 'Apex predator of the deep' },
  octopus:         { name: 'Octopus',         emoji: '🐙', tier: 6, description: 'Eight arms and a brilliant mind' },
  crab:            { name: 'Crab',            emoji: '🦀', tier: 6, description: 'Armored sideways walker' },
  seahorse:        { name: 'Seahorse',        emoji: '🦑', tier: 6, description: 'A tiny horse of the sea' },
  spider:          { name: 'Spider',          emoji: '🕷️', tier: 6, description: 'Eight-legged web weaver' },
  ant:             { name: 'Ant',             emoji: '🐜', tier: 6, description: 'Tiny but unstoppable together' },
  bee:             { name: 'Bee',             emoji: '🐝', tier: 6, description: 'Buzzing pollinator of the world' },
  butterfly:       { name: 'Butterfly',       emoji: '🦋', tier: 6, description: 'Transformation made beautiful' },

  // ============================================
  // TIER 7: Diversification (7)
  // ============================================
  dinosaur:        { name: 'Dinosaur',        emoji: '🦕', tier: 7, description: 'Rulers of the ancient world' },
  bird:            { name: 'Bird',            emoji: '🐦', tier: 7, description: 'Dinosaurs took to the sky' },
  mammal:          { name: 'Mammal',          emoji: '🐭', tier: 7, description: 'Warm-blooded and nurturing' },
  meteor:          { name: 'Meteor',          emoji: '☄️', tier: 7, description: 'A rock from the stars' },
  snake:           { name: 'Snake',           emoji: '🐍', tier: 7, description: 'Legless and lethal' },
  crocodile:       { name: 'Crocodile',       emoji: '🐊', tier: 7, description: 'A living dinosaur' },
  turtle:          { name: 'Turtle',          emoji: '🐢', tier: 7, description: 'Patience in a shell' },

  // ============================================
  // TIER 8: Rise of mammals & animals (8)
  // ============================================
  extinction:      { name: 'Extinction',      emoji: '💀', tier: 8, description: 'The end... and a new beginning' },
  primate:         { name: 'Primate',         emoji: '🐒', tier: 8, description: 'Smart, social tree-dwellers' },
  wolf:            { name: 'Wolf',            emoji: '🐺', tier: 8, description: 'Pack hunter of the wilds' },
  horse:           { name: 'Horse',           emoji: '🐴', tier: 8, description: 'Grace and speed on four legs' },
  elephant:        { name: 'Elephant',        emoji: '🐘', tier: 8, description: 'Gentle giant with a long memory' },
  lion:            { name: 'Lion',            emoji: '🦁', tier: 8, description: 'King of the savanna' },
  bear:            { name: 'Bear',            emoji: '🐻', tier: 8, description: 'Powerful lord of the forest' },
  bat:             { name: 'Bat',             emoji: '🦇', tier: 8, description: 'The only mammal that truly flies' },
  whale:           { name: 'Whale',           emoji: '🐋', tier: 8, description: 'Mammal that returned to the sea' },
  dolphin:         { name: 'Dolphin',         emoji: '🐬', tier: 8, description: 'Intelligent swimmer of the deep' },
  death:           { name: 'Death',           emoji: '☠️', tier: 8, description: 'The final chapter of every life' },

  // ============================================
  // TIER 9: Hominid evolution (3)
  // ============================================
  ape:             { name: 'Ape',             emoji: '🦍', tier: 9, description: 'Our closest relatives' },
  tool:            { name: 'Tool',            emoji: '🔧', tier: 9, description: 'Rock shaped with purpose' },

  // ============================================
  // TIER 10: Becoming human (6)
  // ============================================
  early_human:     { name: 'Early Human',     emoji: '🧑‍🦲', tier: 10, description: 'Walking upright into history' },
  fire_mastery:    { name: 'Fire Mastery',    emoji: '🏕️', tier: 10, description: 'Taming the flame changed everything' },
  wheel:           { name: 'Wheel',           emoji: '☸️', tier: 10, description: 'Round and revolutionary' },
  rope:            { name: 'Rope',            emoji: '🪢', tier: 10, description: 'Fibers twisted into strength' },
  leather:         { name: 'Leather',         emoji: '👝', tier: 10, description: 'Animal hide made durable' },

  // ============================================
  // TIER 11: Early society (9)
  // ============================================
  language:        { name: 'Language',        emoji: '🗣️', tier: 11, description: 'Ideas given voice' },
  tribe:           { name: 'Tribe',           emoji: '👥', tier: 11, description: 'Strength in numbers' },
  art:             { name: 'Art',             emoji: '🎨', tier: 11, description: 'The first spark of creativity' },
  clothing:        { name: 'Clothing',        emoji: '👘', tier: 11, description: 'Protection from the elements' },
  shelter:         { name: 'Shelter',         emoji: '🛖', tier: 11, description: 'A safe place to call home' },
  cooking:         { name: 'Cooking',         emoji: '🍖', tier: 11, description: 'Fire transforms food' },
  campfire:        { name: 'Campfire',        emoji: '🔥', tier: 11, description: 'Gathering around the flame' },
  drum:            { name: 'Drum',            emoji: '🥁', tier: 11, description: 'The heartbeat of music' },
  dog:             { name: 'Dog',             emoji: '🐕', tier: 11, description: 'Humanity\'s first best friend' },

  // ============================================
  // TIER 12: Organized society (12)
  // ============================================
  agriculture:     { name: 'Agriculture',     emoji: '🌾', tier: 12, description: 'Growing food changed the world' },
  civilization:    { name: 'Civilization',    emoji: '🏛️', tier: 12, description: 'Cities, laws, and culture' },
  technology:      { name: 'Technology',      emoji: '💻', tier: 12, description: 'The pinnacle of human ingenuity' },
  writing:         { name: 'Writing',         emoji: '✍️', tier: 12, description: 'Thoughts made permanent' },
  religion:        { name: 'Religion',        emoji: '🛐', tier: 12, description: 'Seeking meaning beyond the visible' },
  music:           { name: 'Music',           emoji: '🎵', tier: 12, description: 'Emotion woven into sound' },
  village:         { name: 'Village',         emoji: '🏘️', tier: 12, description: 'The first permanent community' },
  burial:          { name: 'Burial',          emoji: '⚰️', tier: 12, description: 'Honoring those who came before' },
  war:             { name: 'War',             emoji: '⚔️', tier: 12, description: 'Conflict that reshapes the world' },
  love:            { name: 'Love',            emoji: '❤️', tier: 12, description: 'The force that binds us together' },
  ship:            { name: 'Ship',            emoji: '⛵', tier: 12, description: 'Sailing toward the unknown' },
  cloth:           { name: 'Cloth',           emoji: '🧵', tier: 12, description: 'Woven threads of comfort' },

  // ============================================
  // TIER 13: Advanced society (10)
  // ============================================
  knowledge:       { name: 'Knowledge',       emoji: '📚', tier: 13, description: 'Understanding accumulated over generations' },
  trade:           { name: 'Trade',           emoji: '🤝', tier: 13, description: 'Exchange that builds prosperity' },
  law:             { name: 'Law',             emoji: '⚖️', tier: 13, description: 'Rules that hold society together' },
  city:            { name: 'City',            emoji: '🏙️', tier: 13, description: 'Where thousands live and dream' },
  peace:           { name: 'Peace',           emoji: '🕊️', tier: 13, description: 'Harmony hard-won and precious' },
  printing:        { name: 'Printing',        emoji: '🖨️', tier: 13, description: 'Ideas multiplied a thousandfold' },
  airplane:        { name: 'Airplane',        emoji: '✈️', tier: 13, description: 'Humans finally took flight' },
  rocket:          { name: 'Rocket',          emoji: '🚀', tier: 13, description: 'Fire pointed at the stars' },

  // ============================================
  // TIER 14: Industrial & modern age (8)
  // ============================================
  money:           { name: 'Money',           emoji: '💰', tier: 14, description: 'Abstract value made tangible' },
  market:          { name: 'Market',          emoji: '🏪', tier: 14, description: 'Where supply meets demand' },
  philosophy:      { name: 'Philosophy',      emoji: '🤔', tier: 14, description: 'Thinking about thinking' },
  medicine:        { name: 'Medicine',        emoji: '💊', tier: 14, description: 'Healing through understanding' },
  castle:          { name: 'Castle',          emoji: '🏰', tier: 14, description: 'Power made of stone' },
  factory:         { name: 'Factory',         emoji: '🏭', tier: 14, description: 'Mass production begins' },
  computer:        { name: 'Computer',        emoji: '🖥️', tier: 14, description: 'A thinking machine' },
  internet:        { name: 'Internet',        emoji: '🌐', tier: 15, description: 'The world connected' },
  smartphone:      { name: 'Smartphone',      emoji: '📱', tier: 15, description: 'The world in your pocket' },
  ai:              { name: 'AI',              emoji: '🤖', tier: 15, description: 'Intelligence born from silicon' },
}

// Recipes: maps pair "a+b" to result element id
// Both orderings are checked at runtime via findRecipe()
export const RECIPES = {
  // ===== Tier 1: Basic =====
  'earth+water': 'mud',
  'earth+fire': 'lava',
  'air+fire': 'energy',
  'air+water': 'rain',
  'water+water': 'ocean',
  'fire+water': 'steam',
  'fire+fire': 'sun',
  'air+air': 'storm',

  // ===== Tier 2: Nature =====
  'mud+water': 'swamp',
  'lava+ocean': 'rock',
  'earth+rain': 'plant',
  'energy+storm': 'lightning',
  'plant+rain': 'tree',
  'earth+rock': 'mountain',
  'plant+sun': 'flower',
  'water+storm': 'ice',
  'mud+sun': 'clay',
  'air+rock': 'sand',
  'rain+rock': 'lake',
  'ocean+rock': 'tide_pool',
  'ocean+sun': 'time',
  'energy+sand': 'gunpowder',
  'mountain+water': 'cave',
  'mountain+ocean': 'island',
  'air+ice': 'snow',

  // ===== Tier 3: Complex nature & materials =====
  'energy+ocean': 'primordial_soup',
  'lightning+primordial_soup': 'amino_acid',
  'amino_acid+energy': 'dna',
  'dna+primordial_soup': 'cell',
  'plant+rock': 'moss',
  'plant+swamp': 'fern',
  'air+flower': 'seed',
  'flower+tree': 'fruit',
  'mud+tree': 'fungi',
  'earth+plant': 'grass',
  'tree+tree': 'forest',
  'lightning+rock': 'crystal',
  'sand+sun': 'desert',
  'fire+rock': 'copper',
  'lava+rock': 'iron',
  'rock+sun': 'gold',
  'tree+water': 'boat',
  'rock+tree': 'spear',
  'clay+fire': 'pottery',
  'plant+water': 'paper',

  // ===== Tier 4: Organisms & intermediate =====
  'cell+swamp': 'bacteria',
  'cell+sun': 'algae',
  'bacteria+ocean': 'plankton',
  'bacteria+mud': 'worm',
  'forest+rain': 'jungle',
  'copper+fire': 'bronze',
  'fire+iron': 'steel',
  'fire+sand': 'glass',
  'clay+earth': 'brick',
  'energy+iron': 'compass',
  'iron+steam': 'steam_engine',
  'copper+lightning': 'electricity',
  'glass+glass': 'telescope',

  // ===== Tier 5: Sea & land life =====
  'dna+plankton': 'fish',
  'plankton+water': 'jellyfish',
  'air+worm': 'insect',
  'algae+rock': 'coral',
  'air+electricity': 'radio',

  // ===== Tier 6: Vertebrate evolution & creatures =====
  'earth+fish': 'amphibian',
  'amphibian+sun': 'reptile',
  'reptile+reptile': 'egg',
  'energy+fish': 'shark',
  'dna+jellyfish': 'octopus',
  'fish+rock': 'crab',
  'algae+fish': 'seahorse',
  'insect+tree': 'spider',
  'earth+insect': 'ant',
  'flower+insect': 'bee',
  'air+insect': 'butterfly',

  // ===== Tier 7: Diversification =====
  'energy+reptile': 'dinosaur',
  'air+dinosaur': 'bird',
  'egg+tree': 'mammal',
  'energy+rock': 'meteor',
  'earth+reptile': 'snake',
  'reptile+swamp': 'crocodile',
  'ocean+reptile': 'turtle',

  // ===== Tier 8: Rise of mammals =====
  'dinosaur+meteor': 'extinction',
  'mammal+tree': 'primate',
  'mammal+mountain': 'wolf',
  'grass+mammal': 'horse',
  'mammal+rain': 'elephant',
  'mammal+sun': 'lion',
  'cave+mammal': 'bear',
  'air+mammal': 'bat',
  'mammal+ocean': 'whale',
  'fish+mammal': 'dolphin',
  'cell+extinction': 'death',

  // ===== Tier 9: Hominid =====
  'energy+primate': 'ape',
  'rock+rock': 'tool',

  // ===== Tier 10: Becoming human =====
  'ape+tool': 'early_human',
  'early_human+fire': 'fire_mastery',
  'tool+tree': 'wheel',
  'plant+tool': 'rope',
  'mammal+tool': 'leather',

  // ===== Tier 11: Early society =====
  'air+early_human': 'language',
  'early_human+early_human': 'tribe',
  'early_human+flower': 'art',
  'early_human+mammal': 'clothing',
  'early_human+tree': 'shelter',
  'fire_mastery+fish': 'cooking',
  'fire_mastery+tree': 'campfire',
  'art+tree': 'drum',
  'tribe+wolf': 'dog',

  // ===== Tier 12: Organized society =====
  'plant+tribe': 'agriculture',
  'agriculture+tribe': 'civilization',
  'civilization+energy': 'technology',
  'clay+language': 'writing',
  'sun+tribe': 'religion',
  'drum+language': 'music',
  'shelter+tribe': 'village',
  'rock+tribe': 'burial',
  'spear+tribe': 'war',
  'art+tribe': 'love',
  'boat+cloth': 'ship',
  'rope+tool': 'cloth',

  // ===== Tier 13: Advanced society =====
  'language+writing': 'knowledge',
  'village+village': 'trade',
  'village+writing': 'law',
  'brick+village': 'city',
  'language+war': 'peace',
  'paper+writing': 'printing',
  'bird+technology': 'airplane',
  'fire+technology': 'rocket',

  // ===== Tier 14: Industrial & modern =====
  'copper+trade': 'money',
  'trade+village': 'market',
  'knowledge+language': 'philosophy',
  'knowledge+plant': 'medicine',
  'city+rock': 'castle',
  'city+steam_engine': 'factory',
  'electricity+knowledge': 'computer',
  'computer+computer': 'internet',
  'computer+radio': 'smartphone',
  'computer+dna': 'ai',
}

/**
 * Look up a recipe by two element IDs (order doesn't matter)
 */
export function findRecipe(id1, id2) {
  const key1 = `${id1}+${id2}`
  const key2 = `${id2}+${id1}`
  return RECIPES[key1] || RECIPES[key2] || null
}

/**
 * Get a random hint for an undiscovered element
 * Returns { ingredient1, ingredient2, result } or null
 */
export function getHint(discoveredIds) {
  const undiscovered = []
  for (const [key, resultId] of Object.entries(RECIPES)) {
    if (!discoveredIds.has(resultId)) {
      const [a, b] = key.split('+')
      // Only hint recipes where both ingredients are already discovered
      if (discoveredIds.has(a) && discoveredIds.has(b)) {
        undiscovered.push({ ingredient1: a, ingredient2: b, result: resultId })
      }
    }
  }
  if (undiscovered.length === 0) return null
  return undiscovered[Math.floor(Math.random() * undiscovered.length)]
}

export function getStarterIds() {
  return Object.entries(ELEMENTS)
    .filter(([_, el]) => el.starter)
    .map(([id]) => id)
}

export const TOTAL_ELEMENTS = Object.keys(ELEMENTS).length
