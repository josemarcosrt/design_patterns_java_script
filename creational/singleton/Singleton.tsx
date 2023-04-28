class SingletonDB {
    private static instance: SingletonDB;

    private constructor() { }

    public static getInstance(): SingletonDB {
        if (!SingletonDB.instance) {
            SingletonDB.instance = new SingletonDB();
        }

        return SingletonDB.instance;
    }

    public someBusinessLogic() {
        // put in here, Business rules whatever you want, and be happy 
    }
}

function clientCode() {
    const s1 = SingletonDB.getInstance();
    const s2 = SingletonDB.getInstance();
    if (s1 === s2) {
        console.log('This Singleton exemple works comproving that both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
clientCode();