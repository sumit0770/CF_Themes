const CF_THEMES = {
    // --- VS CODE & POPULAR CLASSICS ---
    dracula: { name: "Dracula", bg: "#282a36", alt: "#44475a", text: "#f8f8f2", accent: "#bd93f9", link: "#8be9fd" },
    monokai: { name: "Monokai", bg: "#272822", alt: "#3e3e3e", text: "#f8f8f2", accent: "#a6e22e", link: "#66d9ef" },
    oneDark: { name: "One Dark", bg: "#282c34", alt: "#3e4451", text: "#abb2bf", accent: "#61afef", link: "#d19a66" },
    nord: { name: "Nord", bg: "#2e3440", alt: "#3b4252", text: "#eceff4", accent: "#88c0d0", link: "#81a1c1" },
    githubDark: { name: "GitHub Dark", bg: "#0d1117", alt: "#161b22", text: "#c9d1d9", accent: "#58a6ff", link: "#1f6feb" },
    solarizedDark: { name: "Solarized Dark", bg: "#002b36", alt: "#073642", text: "#839496", accent: "#268bd2", link: "#2aa198" },
    material: { name: "Material Ocean", bg: "#0f111a", alt: "#1a1c25", text: "#a6accd", accent: "#80cbc4", link: "#82aaff" },
    gruvbox: { name: "Gruvbox Dark", bg: "#282828", alt: "#3c3836", text: "#ebdbb2", accent: "#fabd2f", link: "#83a598" },
    tokyoNight: { name: "Tokyo Night", bg: "#1a1b26", alt: "#24283b", text: "#a9b1d6", accent: "#7aa2f7", link: "#bb9af7" },
    nightOwl: { name: "Night Owl", bg: "#011627", alt: "#0b2942", text: "#d6deeb", accent: "#7fdbca", link: "#82aaff" },
  
    // --- DARK & OLED MODES ---
    amoled: { name: "Pure Black (OLED)", bg: "#000000", alt: "#121212", text: "#ffffff", accent: "#bb86fc", link: "#03dac6" },
    midnight: { name: "Midnight", bg: "#0b0e14", alt: "#151b23", text: "#b3b1ad", accent: "#ffb454", link: "#39bae6" },
    deepOcean: { name: "Deep Ocean", bg: "#0d1117", alt: "#21262d", text: "#c9d1d9", accent: "#58a6ff", link: "#a5d6ff" },
    void: { name: "Void", bg: "#0a0a0a", alt: "#1a1a1a", text: "#eeeeee", accent: "#e91e63", link: "#00bcd4" },
    carbon: { name: "IBM Carbon", bg: "#161616", alt: "#262626", text: "#f4f4f4", accent: "#78a9ff", link: "#be95ff" },
  
    // --- CYBERPUNK & NEON ---
    cyberpunk: { name: "Cyberpunk 2077", bg: "#1a1a2e", alt: "#16213e", text: "#e94560", accent: "#0f3460", link: "#00d2ff" },
    synthwave: { name: "Synthwave '84", bg: "#262335", alt: "#342e4f", text: "#ff7edb", accent: "#f97e72", link: "#36f9f6" },
    neon: { name: "Neon Gas", bg: "#0d0221", alt: "#261447", text: "#ffd400", accent: "#ff0055", link: "#00f5d4" },
    outrun: { name: "Outrun", bg: "#13022c", alt: "#321051", text: "#ff6ac1", accent: "#f3ea5f", link: "#5ff3ff" },
    matrix: { name: "Matrix", bg: "#000000", alt: "#001a00", text: "#00ff41", accent: "#008f11", link: "#00ff41" },
  
    // --- NATURE & SOFT TONES ---
    forest: { name: "Deep Forest", bg: "#1b2b1c", alt: "#2d3f2e", text: "#e0e2d5", accent: "#7ba05b", link: "#a3c1ad" },
    everglade: { name: "Everglade", bg: "#131a13", alt: "#1f291f", text: "#d1d9d1", accent: "#6ba36b", link: "#94c994" },
    earth: { name: "Earthly", bg: "#2c2420", alt: "#3d322d", text: "#e8e1d9", accent: "#a68a64", link: "#d4a373" },
    ocean: { name: "Oceanic Next", bg: "#1b2b34", alt: "#343d46", text: "#d8dee9", accent: "#fb5e2a", link: "#6699cc" },
    nordic: { name: "Nordic Frost", bg: "#242933", alt: "#3b4252", text: "#d8dee9", accent: "#88c0d0", link: "#8fbcbb" },
  
    // --- MINIMALIST & SHADES ---
    shadesOfPurple: { name: "Shades of Purple", bg: "#2d2b55", alt: "#3e3b85", text: "#ffffff", accent: "#fad000", link: "#b362ff" },
    blueberry: { name: "Blueberry", bg: "#242942", alt: "#323759", text: "#e1e1e6", accent: "#8a91ff", link: "#ffcc66" },
    coffee: { name: "Coffee Roast", bg: "#1a1615", alt: "#2d2624", text: "#d9d0c7", accent: "#b38d6d", link: "#f2e8cf" },
    slate: { name: "Slate Dark", bg: "#0f172a", alt: "#1e293b", text: "#f8fafc", accent: "#38bdf8", link: "#818cf8" },
    gray: { name: "Cool Gray", bg: "#111827", alt: "#1f2937", text: "#f3f4f6", accent: "#6366f1", link: "#a5b4fc" },
  
    // --- RETRO & VINTAGE ---
    retro: { name: "Retro 80s", bg: "#2b213a", alt: "#35294a", text: "#ff5e99", accent: "#ffff6a", link: "#88edff" },
    vintage: { name: "Vintage Paper", bg: "#1c1c1c", alt: "#262626", text: "#d6ba8d", accent: "#e06c75", link: "#61afef" },
    sepia: { name: "Dark Sepia", bg: "#2b2622", alt: "#3d352e", text: "#d4be98", accent: "#e67e80", link: "#7daea3" },
    dos: { name: "Classic DOS", bg: "#000000", alt: "#1e1e1e", text: "#aaaaaa", accent: "#ffffff", link: "#5555ff" },
    space: { name: "Deep Space", bg: "#1b1c1d", alt: "#242526", text: "#b9bcbe", accent: "#568af2", link: "#568af2" },
  
    // --- EDITOR REPLICAS ---
    sublime: { name: "Sublime Monokai", bg: "#272822", alt: "#3e3d32", text: "#f8f8f2", accent: "#f92672", link: "#66d9ef" },
    atom: { name: "Atom Dark", bg: "#1d1f21", alt: "#282a2e", text: "#c5c8c6", accent: "#b5bd68", link: "#81a2be" },
    xcode: { name: "Xcode Dark", bg: "#1f1f24", alt: "#292a30", text: "#dfdfe0", accent: "#fc5a5a", link: "#21a1ff" },
    intellij: { name: "IntelliJ Darcula", bg: "#2b2b2b", alt: "#323232", text: "#a9b7c6", accent: "#9876aa", link: "#6897bb" },
    visualStudio: { name: "VS Dark Plus", bg: "#1e1e1e", alt: "#252526", text: "#d4d4d4", accent: "#007acc", link: "#569cd6" },
  
    // --- VIBRANT & EXOTIC ---
    lava: { name: "Volcano", bg: "#1a0a0a", alt: "#301010", text: "#ff9090", accent: "#ff4500", link: "#ffa500" },
    arctic: { name: "Arctic Ice", bg: "#e5e9f0", alt: "#d8dee9", text: "#2e3440", accent: "#5e81ac", link: "#81a1c1" }, // Note: Light theme!
    rose: { name: "Rose Pine", bg: "#191724", alt: "#1f1d2e", text: "#e0def4", accent: "#ebbcba", link: "#31748f" },
    draculaRefined: { name: "Dracula Pro", bg: "#22212c", alt: "#2d2c39", text: "#f8f8f2", accent: "#ff79c6", link: "#8be9fd" },
    palenight: { name: "Palenight", bg: "#292d3e", alt: "#33374d", text: "#bfc7d5", accent: "#c792ea", link: "#89ddff" },
  
    // --- HIGHLIGHT & HIGH CONTRAST ---
    highContrast: { name: "High Contrast", bg: "#000000", alt: "#ffffff", text: "#ffffff", accent: "#ffff00", link: "#00ffff" },
    softDark: { name: "Soft Dark", bg: "#121212", alt: "#1e1e1e", text: "#cccccc", accent: "#ffffff", link: "#bb86fc" },
    royal: { name: "Royal Purple", bg: "#1a0b2e", alt: "#2d1b4d", text: "#e5d5ff", accent: "#ffcc00", link: "#00eeff" },
    gold: { name: "Black & Gold", bg: "#0d0d0d", alt: "#1a1a1a", text: "#e5c07b", accent: "#d4af37", link: "#c1a57b" },
    ruby: { name: "Black & Ruby", bg: "#100808", alt: "#201010", text: "#f8f0f0", accent: "#e0115f", link: "#ff4d4d" }
  };