type Mods = Record<string, boolean | string | undefined>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => value !== undefined && Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}

// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
// 'remove-btn hovered selectable pdg'
