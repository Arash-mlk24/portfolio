import IStorageItem from "@/framework/infrastructure/database/IStorageItem";

class StorageItem<T> implements IStorageItem<T> {
    private readonly key: string

    public constructor(key: string) {
        this.key = key;
    }

    load(): T | null {
        const rawData = localStorage.getItem(this.key);
        return rawData != null ? JSON.parse(rawData) : null;
    }

    save(item: T) {
        const jsonValue = JSON.stringify(item);
        localStorage.setItem(this.key, jsonValue);
    }
}

export default StorageItem;
