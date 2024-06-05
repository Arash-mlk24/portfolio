interface IStorageItem<T> {
    save(item: T): void;

    load(): T | null;
}

export default IStorageItem;
