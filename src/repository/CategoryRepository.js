import repository from './Repository';

const resource = '/categories';


export default {

    getCategoryListData() {
        return repository.get(resource);
    }

}