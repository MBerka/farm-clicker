export const SELL_ANIMAL = 'SELL_ANIMAL';
export const sellAnimal = (field) => ({
    type: SELL_ANIMAL, 
    field
});

export const BUY_ANIMAL = 'BUY_ANIMAL';
export const buyAnimal = (field) => ({
    type: BUY_ANIMAL,
    field
});
