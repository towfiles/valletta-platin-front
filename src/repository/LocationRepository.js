import repository from './Repository';

const resource = '/locations';

export default {

    getLocations(categoryName, nearBy) {
        return repository.get(
            resource + '/' + categoryName + '/' + nearBy
        );
    }

}