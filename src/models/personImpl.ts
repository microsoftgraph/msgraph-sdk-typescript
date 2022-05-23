import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createPersonTypeFromDiscriminatorValue} from './createPersonTypeFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createScoredEmailAddressFromDiscriminatorValue} from './createScoredEmailAddressFromDiscriminatorValue';
import {createWebsiteFromDiscriminatorValue} from './createWebsiteFromDiscriminatorValue';
import {EntityImpl, LocationImpl, PersonTypeImpl, PhoneImpl, ScoredEmailAddressImpl, WebsiteImpl} from './index';
import {Location} from './location';
import {Person} from './person';
import {PersonType} from './personType';
import {Phone} from './phone';
import {ScoredEmailAddress} from './scoredEmailAddress';
import {Website} from './website';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class PersonImpl extends EntityImpl implements Parsable, Person {
    /** The person's birthday. */
    public birthday?: string | undefined;
    /** The name of the person's company. */
    public companyName?: string | undefined;
    /** The person's department. */
    public department?: string | undefined;
    /** The person's display name. */
    public displayName?: string | undefined;
    /** The person's given name. */
    public givenName?: string | undefined;
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only. */
    public imAddress?: string | undefined;
    /** true if the user has flagged this person as a favorite. */
    public isFavorite?: boolean | undefined;
    /** The person's job title. */
    public jobTitle?: string | undefined;
    /** The location of the person's office. */
    public officeLocation?: string | undefined;
    /** Free-form notes that the user has taken about this person. */
    public personNotes?: string | undefined;
    /** The type of person, for example distribution list. */
    public personType?: PersonType | undefined;
    /** The person's phone numbers. */
    public phones?: Phone[] | undefined;
    /** The person's addresses. */
    public postalAddresses?: Location[] | undefined;
    /** The person's profession. */
    public profession?: string | undefined;
    /** The person's email addresses. */
    public scoredEmailAddresses?: ScoredEmailAddress[] | undefined;
    /** The person's surname. */
    public surname?: string | undefined;
    /** The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain. */
    public userPrincipalName?: string | undefined;
    /** The person's websites. */
    public websites?: Website[] | undefined;
    /** The phonetic Japanese name of the person's company. */
    public yomiCompany?: string | undefined;
    /**
     * Instantiates a new person and sets the default values.
     * @param personParameterValue 
     */
    public constructor(personParameterValue?: Person | undefined) {
        super();
        this.birthday = personParameterValue?.birthday ;
        this.companyName = personParameterValue?.companyName ;
        this.department = personParameterValue?.department ;
        this.displayName = personParameterValue?.displayName ;
        this.givenName = personParameterValue?.givenName ;
        this.imAddress = personParameterValue?.imAddress ;
        this.isFavorite = personParameterValue?.isFavorite ;
        this.jobTitle = personParameterValue?.jobTitle ;
        this.officeLocation = personParameterValue?.officeLocation ;
        this.personNotes = personParameterValue?.personNotes ;
        this.personType = personParameterValue?.personType ;
        this.phones = personParameterValue?.phones ;
        this.postalAddresses = personParameterValue?.postalAddresses ;
        this.profession = personParameterValue?.profession ;
        this.scoredEmailAddresses = personParameterValue?.scoredEmailAddresses ;
        this.surname = personParameterValue?.surname ;
        this.userPrincipalName = personParameterValue?.userPrincipalName ;
        this.websites = personParameterValue?.websites ;
        this.yomiCompany = personParameterValue?.yomiCompany ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "birthday": n => { this.birthday = n.getStringValue(); },
            "companyName": n => { this.companyName = n.getStringValue(); },
            "department": n => { this.department = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "imAddress": n => { this.imAddress = n.getStringValue(); },
            "isFavorite": n => { this.isFavorite = n.getBooleanValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "personNotes": n => { this.personNotes = n.getStringValue(); },
            "personType": n => { this.personType = n.getObjectValue<PersonTypeImpl>(createPersonTypeFromDiscriminatorValue); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<PhoneImpl>(createPhoneFromDiscriminatorValue); },
            "postalAddresses": n => { this.postalAddresses = n.getCollectionOfObjectValues<LocationImpl>(createLocationFromDiscriminatorValue); },
            "profession": n => { this.profession = n.getStringValue(); },
            "scoredEmailAddresses": n => { this.scoredEmailAddresses = n.getCollectionOfObjectValues<ScoredEmailAddressImpl>(createScoredEmailAddressFromDiscriminatorValue); },
            "surname": n => { this.surname = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "websites": n => { this.websites = n.getCollectionOfObjectValues<WebsiteImpl>(createWebsiteFromDiscriminatorValue); },
            "yomiCompany": n => { this.yomiCompany = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.birthday){
        writer.writeStringValue("birthday", this.birthday);
        }
        if(this.companyName){
        writer.writeStringValue("companyName", this.companyName);
        }
        if(this.department){
        writer.writeStringValue("department", this.department);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.givenName){
        writer.writeStringValue("givenName", this.givenName);
        }
        if(this.imAddress){
        writer.writeStringValue("imAddress", this.imAddress);
        }
        if(this.isFavorite){
        writer.writeBooleanValue("isFavorite", this.isFavorite);
        }
        if(this.jobTitle){
        writer.writeStringValue("jobTitle", this.jobTitle);
        }
        if(this.officeLocation){
        writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.personNotes){
        writer.writeStringValue("personNotes", this.personNotes);
        }
        if(this.personType){
        writer.writeObjectValue<PersonTypeImpl>("personType", new PersonTypeImpl(this.personType));
        }
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = []; this.phones?.forEach(element => {phonesArrValue.push(new PhoneImpl(element));});
        writer.writeCollectionOfObjectValues<PhoneImpl>("phones", phonesArrValue);
        }
        if(this.postalAddresses && this.postalAddresses.length != 0){        const postalAddressesArrValue: LocationImpl[] = []; this.postalAddresses?.forEach(element => {postalAddressesArrValue.push(new LocationImpl(element));});
        writer.writeCollectionOfObjectValues<LocationImpl>("postalAddresses", postalAddressesArrValue);
        }
        if(this.profession){
        writer.writeStringValue("profession", this.profession);
        }
        if(this.scoredEmailAddresses && this.scoredEmailAddresses.length != 0){        const scoredEmailAddressesArrValue: ScoredEmailAddressImpl[] = []; this.scoredEmailAddresses?.forEach(element => {scoredEmailAddressesArrValue.push(new ScoredEmailAddressImpl(element));});
        writer.writeCollectionOfObjectValues<ScoredEmailAddressImpl>("scoredEmailAddresses", scoredEmailAddressesArrValue);
        }
        if(this.surname){
        writer.writeStringValue("surname", this.surname);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        if(this.websites && this.websites.length != 0){        const websitesArrValue: WebsiteImpl[] = []; this.websites?.forEach(element => {websitesArrValue.push(new WebsiteImpl(element));});
        writer.writeCollectionOfObjectValues<WebsiteImpl>("websites", websitesArrValue);
        }
        if(this.yomiCompany){
        writer.writeStringValue("yomiCompany", this.yomiCompany);
        }
    };
}
