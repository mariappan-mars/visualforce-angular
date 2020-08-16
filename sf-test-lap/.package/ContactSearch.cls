public class ContactSearch {

    @RemoteAction
    public static List<Contact> searchForContacts(){ 
        List<Contact> con = [select ID,Name FROM contact];
        return Con;
    }
}