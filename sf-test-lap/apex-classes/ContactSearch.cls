global class ContactSearch {

    @RemoteAction
    public static List<Contact> searchForContacts(){ 
        List<Contact> result = [select ID,Name FROM contact];
        return result;
    }

    @RemoteAction
    WebService static List<sObject> executeQuery(String query) {
        return Database.query(query);
    }
}