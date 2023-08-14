import { GameAnimal } from '../models/gameAnimal';
import { AnimalEntry } from '../models/apiAnimal';

export const apiAnimalsToGameAnimals = (
  animals: AnimalEntry[],
): GameAnimal[] => {
  return animals.map((animal) => ({
    name: animal.meta.name,
    image: animal.fields.image.url,
    uuid: animal.meta.uuid,
  }));
};
