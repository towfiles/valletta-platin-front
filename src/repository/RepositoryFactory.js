//import list of entity repository types
import CategoryRepository from './CategoryRepository';
import LocationRepository from "./LocationRepository";

const allRepository = {
    category: CategoryRepository,
    location: LocationRepository
};

export const RepositoryFactory = {
    get: name => allRepository[name]
};