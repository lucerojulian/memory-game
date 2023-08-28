import { GameAnimal } from '../models/gameAnimal.model';
import { AnimalEntry } from '../models/apiAnimal.model';

export const apiAnimalsToGameAnimals = (
  animals: AnimalEntry[],
): GameAnimal[] => {
  return animals.map((animal) => ({
    name: animal.meta.name,
    image: animal.fields.image.url,
    uuid: animal.meta.uuid,
  }));
};
