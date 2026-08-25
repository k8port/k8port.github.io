export interface BlogPost {
    slug: string
    title: string
    summary: string
    date: string
    content: string
}

export const posts: BlogPost[] = [
    {
        slug: "whirl-of-kiki",
        title: "A Girl of the Whirl",
        summary: "you can take the girl out the whirl, but you can't take the whirl out of the girl",
        date: "Xmas, 2025",
        content: `This Christmas I want to acknowledge this decade, the 2020s.  You have kicked my ass.
        Somehow you have delivered a future even worse than my depression-addled, American teenage brain
        acknowledged.  Now I stand before you, with my lilt, corroded vagus nerve clutched tightly in my
        hand, waving it as a white flag. You win! And anyone not born on US soil stands on the sidelines
        thinking, (or saying) "privileged American knows not the meaning of suffering!" And I don't, 
        but my family, meaning stripped from existence, and `  
    }
]