export const conditional = <V extends string, T = any>(value: V, map: Record<V, T>): T => {
    return map[value];
};
