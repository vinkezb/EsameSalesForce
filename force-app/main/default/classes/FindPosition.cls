public with sharing class FindPosition {

    @AuraEnabled
    public static List<Conferenza__c> getPos(){
     List<Conferenza__c> a = [SELECT Luogo__r.Indirizzo__c, Luogo__r.City__c, Luogo__r.Stato__c  FROM Conferenza__c]; 
     return a;
    }
    
}