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

/** Provides operations to manage the collection of application entities. */
export class PersonImpl extends EntityImpl implements Person {
    /** The person's birthday. */
    private _birthday?: string | undefined;
    /** The name of the person's company. */
    private _companyName?: string | undefined;
    /** The person's department. */
    private _department?: string | undefined;
    /** The person's display name. */
    private _displayName?: string | undefined;
    /** The person's given name. */
    private _givenName?: string | undefined;
    /** The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only. */
    private _imAddress?: string | undefined;
    /** true if the user has flagged this person as a favorite. */
    private _isFavorite?: boolean | undefined;
    /** The person's job title. */
    private _jobTitle?: string | undefined;
    /** The location of the person's office. */
    private _officeLocation?: string | undefined;
    /** Free-form notes that the user has taken about this person. */
    private _personNotes?: string | undefined;
    /** The type of person, for example distribution list. */
    private _personType?: PersonType | undefined;
    /** The person's phone numbers. */
    private _phones?: Phone[] | undefined;
    /** The person's addresses. */
    private _postalAddresses?: Location[] | undefined;
    /** The person's profession. */
    private _profession?: string | undefined;
    /** The person's email addresses. */
    private _scoredEmailAddresses?: ScoredEmailAddress[] | undefined;
    /** The person's surname. */
    private _surname?: string | undefined;
    /** The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain. */
    private _userPrincipalName?: string | undefined;
    /** The person's websites. */
    private _websites?: Website[] | undefined;
    /** The phonetic Japanese name of the person's company. */
    private _yomiCompany?: string | undefined;
    /**
     * Gets the birthday property value. The person's birthday.
     * @returns a string
     */
    public get birthday() {
        return this._birthday;
    };
    /**
     * Sets the birthday property value. The person's birthday.
     * @param value Value to set for the birthday property.
     */
    public set birthday(value: string | undefined) {
        if(value) {
            this._birthday = value;
        }
    };
    /**
     * Gets the companyName property value. The name of the person's company.
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Sets the companyName property value. The name of the person's company.
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        if(value) {
            this._companyName = value;
        }
    };
    /**
     * Instantiates a new person and sets the default values.
     * @param personParameterValue 
     */
    public constructor(personParameterValue?: Person | undefined) {
        super(personParameterValue);
        this._birthday = personParameterValue?.birthday;
        this._companyName = personParameterValue?.companyName;
        this._department = personParameterValue?.department;
        this._displayName = personParameterValue?.displayName;
        this._givenName = personParameterValue?.givenName;
        this._imAddress = personParameterValue?.imAddress;
        this._isFavorite = personParameterValue?.isFavorite;
        this._jobTitle = personParameterValue?.jobTitle;
        this._officeLocation = personParameterValue?.officeLocation;
        this._personNotes = personParameterValue?.personNotes;
        this._personType = personParameterValue?.personType;
        this._phones = personParameterValue?.phones;
        this._postalAddresses = personParameterValue?.postalAddresses;
        this._profession = personParameterValue?.profession;
        this._scoredEmailAddresses = personParameterValue?.scoredEmailAddresses;
        this._surname = personParameterValue?.surname;
        this._userPrincipalName = personParameterValue?.userPrincipalName;
        this._websites = personParameterValue?.websites;
        this._yomiCompany = personParameterValue?.yomiCompany;
    };
    /**
     * Gets the department property value. The person's department.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The person's department.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        if(value) {
            this._department = value;
        }
    };
    /**
     * Gets the displayName property value. The person's display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The person's display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the givenName property value. The person's given name.
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The person's given name.
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        if(value) {
            this._givenName = value;
        }
    };
    /**
     * Gets the imAddress property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
     * @returns a string
     */
    public get imAddress() {
        return this._imAddress;
    };
    /**
     * Sets the imAddress property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
     * @param value Value to set for the imAddress property.
     */
    public set imAddress(value: string | undefined) {
        if(value) {
            this._imAddress = value;
        }
    };
    /**
     * Gets the isFavorite property value. true if the user has flagged this person as a favorite.
     * @returns a boolean
     */
    public get isFavorite() {
        return this._isFavorite;
    };
    /**
     * Sets the isFavorite property value. true if the user has flagged this person as a favorite.
     * @param value Value to set for the isFavorite property.
     */
    public set isFavorite(value: boolean | undefined) {
        if(value) {
            this._isFavorite = value;
        }
    };
    /**
     * Gets the jobTitle property value. The person's job title.
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Sets the jobTitle property value. The person's job title.
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        if(value) {
            this._jobTitle = value;
        }
    };
    /**
     * Gets the officeLocation property value. The location of the person's office.
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. The location of the person's office.
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        if(value) {
            this._officeLocation = value;
        }
    };
    /**
     * Gets the personNotes property value. Free-form notes that the user has taken about this person.
     * @returns a string
     */
    public get personNotes() {
        return this._personNotes;
    };
    /**
     * Sets the personNotes property value. Free-form notes that the user has taken about this person.
     * @param value Value to set for the personNotes property.
     */
    public set personNotes(value: string | undefined) {
        if(value) {
            this._personNotes = value;
        }
    };
    /**
     * Gets the personType property value. The type of person, for example distribution list.
     * @returns a PersonTypeInterface
     */
    public get personType() {
        return this._personType;
    };
    /**
     * Sets the personType property value. The type of person, for example distribution list.
     * @param value Value to set for the personType property.
     */
    public set personType(value: PersonType | undefined) {
        if(value) {
            this._personType = value instanceof PersonTypeImpl? value : new PersonTypeImpl(value);
        }
    };
    /**
     * Gets the phones property value. The person's phone numbers.
     * @returns a PhoneInterface
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. The person's phone numbers.
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        if(value) {
            const phonesArrValue: PhoneImpl[] = [];
            this.phones?.forEach(element => {
                phonesArrValue.push((element instanceof PhoneImpl? element:new PhoneImpl(element)));
            });
            this._phones = phonesArrValue;
        }
    };
    /**
     * Gets the postalAddresses property value. The person's addresses.
     * @returns a LocationInterface
     */
    public get postalAddresses() {
        return this._postalAddresses;
    };
    /**
     * Sets the postalAddresses property value. The person's addresses.
     * @param value Value to set for the postalAddresses property.
     */
    public set postalAddresses(value: Location[] | undefined) {
        if(value) {
            const postalAddressesArrValue: LocationImpl[] = [];
            this.postalAddresses?.forEach(element => {
                postalAddressesArrValue.push((element instanceof LocationImpl? element:new LocationImpl(element)));
            });
            this._postalAddresses = postalAddressesArrValue;
        }
    };
    /**
     * Gets the profession property value. The person's profession.
     * @returns a string
     */
    public get profession() {
        return this._profession;
    };
    /**
     * Sets the profession property value. The person's profession.
     * @param value Value to set for the profession property.
     */
    public set profession(value: string | undefined) {
        if(value) {
            this._profession = value;
        }
    };
    /**
     * Gets the scoredEmailAddresses property value. The person's email addresses.
     * @returns a ScoredEmailAddressInterface
     */
    public get scoredEmailAddresses() {
        return this._scoredEmailAddresses;
    };
    /**
     * Sets the scoredEmailAddresses property value. The person's email addresses.
     * @param value Value to set for the scoredEmailAddresses property.
     */
    public set scoredEmailAddresses(value: ScoredEmailAddress[] | undefined) {
        if(value) {
            const scoredEmailAddressesArrValue: ScoredEmailAddressImpl[] = [];
            this.scoredEmailAddresses?.forEach(element => {
                scoredEmailAddressesArrValue.push((element instanceof ScoredEmailAddressImpl? element:new ScoredEmailAddressImpl(element)));
            });
            this._scoredEmailAddresses = scoredEmailAddressesArrValue;
        }
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
            writer.writeObjectValue<PersonTypeImpl>("personType", (!this.personType || this.personType instanceof PersonTypeImpl? this.personType : new PersonTypeImpl(this.personType)));
        }
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = [];
        this.phones?.forEach(element => {
            phonesArrValue.push((element instanceof PhoneImpl? element:new PhoneImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PhoneImpl>("phones", phonesArrValue);
        }
        if(this.postalAddresses && this.postalAddresses.length != 0){        const postalAddressesArrValue: LocationImpl[] = [];
        this.postalAddresses?.forEach(element => {
            postalAddressesArrValue.push((element instanceof LocationImpl? element:new LocationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LocationImpl>("postalAddresses", postalAddressesArrValue);
        }
        if(this.profession){
            writer.writeStringValue("profession", this.profession);
        }
        if(this.scoredEmailAddresses && this.scoredEmailAddresses.length != 0){        const scoredEmailAddressesArrValue: ScoredEmailAddressImpl[] = [];
        this.scoredEmailAddresses?.forEach(element => {
            scoredEmailAddressesArrValue.push((element instanceof ScoredEmailAddressImpl? element:new ScoredEmailAddressImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ScoredEmailAddressImpl>("scoredEmailAddresses", scoredEmailAddressesArrValue);
        }
        if(this.surname){
            writer.writeStringValue("surname", this.surname);
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        if(this.websites && this.websites.length != 0){        const websitesArrValue: WebsiteImpl[] = [];
        this.websites?.forEach(element => {
            websitesArrValue.push((element instanceof WebsiteImpl? element:new WebsiteImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WebsiteImpl>("websites", websitesArrValue);
        }
        if(this.yomiCompany){
            writer.writeStringValue("yomiCompany", this.yomiCompany);
        }
    };
    /**
     * Gets the surname property value. The person's surname.
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. The person's surname.
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        if(value) {
            this._surname = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
    /**
     * Gets the websites property value. The person's websites.
     * @returns a WebsiteInterface
     */
    public get websites() {
        return this._websites;
    };
    /**
     * Sets the websites property value. The person's websites.
     * @param value Value to set for the websites property.
     */
    public set websites(value: Website[] | undefined) {
        if(value) {
            const websitesArrValue: WebsiteImpl[] = [];
            this.websites?.forEach(element => {
                websitesArrValue.push((element instanceof WebsiteImpl? element:new WebsiteImpl(element)));
            });
            this._websites = websitesArrValue;
        }
    };
    /**
     * Gets the yomiCompany property value. The phonetic Japanese name of the person's company.
     * @returns a string
     */
    public get yomiCompany() {
        return this._yomiCompany;
    };
    /**
     * Sets the yomiCompany property value. The phonetic Japanese name of the person's company.
     * @param value Value to set for the yomiCompany property.
     */
    public set yomiCompany(value: string | undefined) {
        if(value) {
            this._yomiCompany = value;
        }
    };
}
