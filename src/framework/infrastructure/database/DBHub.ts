import IStorageItem from "@/framework/infrastructure/database/IStorageItem";
import StorageItem from "@/framework/infrastructure/database/StorageItem";
import StorageKey from "@/framework/common/static/StorageKey";

class DBHub {
    private static instance: DBHub

    public static getInstance() {
        if (!DBHub.instance) DBHub.instance = new DBHub()
        return DBHub.instance
    }

    private readonly tokenItem: IStorageItem<string>

    private constructor() {
        this.tokenItem = new StorageItem<string>(StorageKey.TOKEN);
    }

    public getTokenItem(): IStorageItem<string> {
        return this.tokenItem
    }
}

export default DBHub;
