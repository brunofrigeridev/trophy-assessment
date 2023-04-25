export type Game = {
    id: number
    title: string
    highlightsSupported: boolean
    fullyOptimized: boolean
    steamUrl: string //https://store.steampowered.com/app/251570,
    publisher: string
    genre: string
    status: Status
    imageUrl?: string
}

export enum Status {
    AVAILABLE,
}