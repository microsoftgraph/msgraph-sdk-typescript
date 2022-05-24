import {Contact} from './contact';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {EmailAddress} from './emailAddress';
import {Extension} from './extension';
import {EmailAddressImpl, ExtensionImpl, MultiValueLegacyExtendedPropertyImpl, OutlookItemImpl, PhysicalAddressImpl, ProfilePhotoImpl, SingleValueLegacyExtendedPropertyImpl} from './index';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {PhysicalAddress} from './physicalAddress';
import {ProfilePhoto} from './profilePhoto';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ContactImpl extends OutlookItemImpl implements Contact, Parsable {
    /** The name of the contact's assistant. */
    public assistantName?: string | undefined;
    /** The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public birthday?: Date | undefined;
    /** The contact's business address. */
    public businessAddress?: PhysicalAddress | undefined;
    /** The business home page of the contact. */
    public businessHomePage?: string | undefined;
    /** The contact's business phone numbers. */
    public businessPhones?: string[] | undefined;
    /** The names of the contact's children. */
    public children?: string[] | undefined;
    /** The name of the contact's company. */
    public companyName?: string | undefined;
    /** The contact's department. */
    public department?: string | undefined;
    /** The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation. */
    public displayName?: string | undefined;
    /** The contact's email addresses. */
    public emailAddresses?: EmailAddress[] | undefined;
    /** The collection of open extensions defined for the contact. Nullable. */
    public extensions?: Extension[] | undefined;
    /** The name the contact is filed under. */
    public fileAs?: string | undefined;
    /** The contact's generation. */
    public generation?: string | undefined;
    /** The contact's given name. */
    public givenName?: string | undefined;
    /** The contact's home address. */
    public homeAddress?: PhysicalAddress | undefined;
    /** The contact's home phone numbers. */
    public homePhones?: string[] | undefined;
    /** The imAddresses property */
    public imAddresses?: string[] | undefined;
    /** The initials property */
    public initials?: string | undefined;
    /** The jobTitle property */
    public jobTitle?: string | undefined;
    /** The manager property */
    public manager?: string | undefined;
    /** The middleName property */
    public middleName?: string | undefined;
    /** The mobilePhone property */
    public mobilePhone?: string | undefined;
    /** The collection of multi-value extended properties defined for the contact. Read-only. Nullable. */
    public multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The nickName property */
    public nickName?: string | undefined;
    /** The officeLocation property */
    public officeLocation?: string | undefined;
    /** The otherAddress property */
    public otherAddress?: PhysicalAddress | undefined;
    /** The parentFolderId property */
    public parentFolderId?: string | undefined;
    /** The personalNotes property */
    public personalNotes?: string | undefined;
    /** Optional contact picture. You can get or set a photo for a contact. */
    public photo?: ProfilePhoto | undefined;
    /** The profession property */
    public profession?: string | undefined;
    /** The collection of single-value extended properties defined for the contact. Read-only. Nullable. */
    public singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The spouseName property */
    public spouseName?: string | undefined;
    /** The surname property */
    public surname?: string | undefined;
    /** The title property */
    public title?: string | undefined;
    /** The yomiCompanyName property */
    public yomiCompanyName?: string | undefined;
    /** The yomiGivenName property */
    public yomiGivenName?: string | undefined;
    /** The yomiSurname property */
    public yomiSurname?: string | undefined;
    /**
     * Instantiates a new contact and sets the default values.
     * @param contactParameterValue 
     */
    public constructor(contactParameterValue?: Contact | undefined) {
        super();
        this.assistantName = contactParameterValue?.assistantName ;
        this.birthday = contactParameterValue?.birthday ;
        this.businessAddress = contactParameterValue?.businessAddress ;
        this.businessHomePage = contactParameterValue?.businessHomePage ;
        this.businessPhones = contactParameterValue?.businessPhones ;
        this.children = contactParameterValue?.children ;
        this.companyName = contactParameterValue?.companyName ;
        this.department = contactParameterValue?.department ;
        this.displayName = contactParameterValue?.displayName ;
        this.emailAddresses = contactParameterValue?.emailAddresses ;
        this.extensions = contactParameterValue?.extensions ;
        this.fileAs = contactParameterValue?.fileAs ;
        this.generation = contactParameterValue?.generation ;
        this.givenName = contactParameterValue?.givenName ;
        this.homeAddress = contactParameterValue?.homeAddress ;
        this.homePhones = contactParameterValue?.homePhones ;
        this.imAddresses = contactParameterValue?.imAddresses ;
        this.initials = contactParameterValue?.initials ;
        this.jobTitle = contactParameterValue?.jobTitle ;
        this.manager = contactParameterValue?.manager ;
        this.middleName = contactParameterValue?.middleName ;
        this.mobilePhone = contactParameterValue?.mobilePhone ;
        this.multiValueExtendedProperties = contactParameterValue?.multiValueExtendedProperties ;
        this.nickName = contactParameterValue?.nickName ;
        this.officeLocation = contactParameterValue?.officeLocation ;
        this.otherAddress = contactParameterValue?.otherAddress ;
        this.parentFolderId = contactParameterValue?.parentFolderId ;
        this.personalNotes = contactParameterValue?.personalNotes ;
        this.photo = contactParameterValue?.photo ;
        this.profession = contactParameterValue?.profession ;
        this.singleValueExtendedProperties = contactParameterValue?.singleValueExtendedProperties ;
        this.spouseName = contactParameterValue?.spouseName ;
        this.surname = contactParameterValue?.surname ;
        this.title = contactParameterValue?.title ;
        this.yomiCompanyName = contactParameterValue?.yomiCompanyName ;
        this.yomiGivenName = contactParameterValue?.yomiGivenName ;
        this.yomiSurname = contactParameterValue?.yomiSurname ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assistantName": n => { this.assistantName = n.getStringValue(); },
            "birthday": n => { this.birthday = n.getDateValue(); },
            "businessAddress": n => { this.businessAddress = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "businessHomePage": n => { this.businessHomePage = n.getStringValue(); },
            "businessPhones": n => { this.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
            "children": n => { this.children = n.getCollectionOfPrimitiveValues<string>(); },
            "companyName": n => { this.companyName = n.getStringValue(); },
            "department": n => { this.department = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddresses": n => { this.emailAddresses = n.getCollectionOfObjectValues<EmailAddressImpl>(createEmailAddressFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "fileAs": n => { this.fileAs = n.getStringValue(); },
            "generation": n => { this.generation = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "homeAddress": n => { this.homeAddress = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "homePhones": n => { this.homePhones = n.getCollectionOfPrimitiveValues<string>(); },
            "imAddresses": n => { this.imAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "initials": n => { this.initials = n.getStringValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "manager": n => { this.manager = n.getStringValue(); },
            "middleName": n => { this.middleName = n.getStringValue(); },
            "mobilePhone": n => { this.mobilePhone = n.getStringValue(); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "nickName": n => { this.nickName = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "otherAddress": n => { this.otherAddress = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "parentFolderId": n => { this.parentFolderId = n.getStringValue(); },
            "personalNotes": n => { this.personalNotes = n.getStringValue(); },
            "photo": n => { this.photo = n.getObjectValue<ProfilePhotoImpl>(createProfilePhotoFromDiscriminatorValue); },
            "profession": n => { this.profession = n.getStringValue(); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "spouseName": n => { this.spouseName = n.getStringValue(); },
            "surname": n => { this.surname = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "yomiCompanyName": n => { this.yomiCompanyName = n.getStringValue(); },
            "yomiGivenName": n => { this.yomiGivenName = n.getStringValue(); },
            "yomiSurname": n => { this.yomiSurname = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assistantName){
        writer.writeStringValue("assistantName", this.assistantName);
        }
        if(this.birthday){
        writer.writeDateValue("birthday", this.birthday);
        }
        if(this.businessAddress){
        writer.writeObjectValue<PhysicalAddressImpl>("businessAddress", new PhysicalAddressImpl(this.businessAddress));
        }
        if(this.businessHomePage){
        writer.writeStringValue("businessHomePage", this.businessHomePage);
        }
        if(this.businessPhones){
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        }
        if(this.children){
        writer.writeCollectionOfPrimitiveValues<string>("children", this.children);
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
        if(this.emailAddresses && this.emailAddresses.length != 0){        const emailAddressesArrValue: EmailAddressImpl[] = []; this.emailAddresses?.forEach(element => {emailAddressesArrValue.push(new EmailAddressImpl(element));});
        writer.writeCollectionOfObjectValues<EmailAddressImpl>("emailAddresses", emailAddressesArrValue);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.fileAs){
        writer.writeStringValue("fileAs", this.fileAs);
        }
        if(this.generation){
        writer.writeStringValue("generation", this.generation);
        }
        if(this.givenName){
        writer.writeStringValue("givenName", this.givenName);
        }
        if(this.homeAddress){
        writer.writeObjectValue<PhysicalAddressImpl>("homeAddress", new PhysicalAddressImpl(this.homeAddress));
        }
        if(this.homePhones){
        writer.writeCollectionOfPrimitiveValues<string>("homePhones", this.homePhones);
        }
        if(this.imAddresses){
        writer.writeCollectionOfPrimitiveValues<string>("imAddresses", this.imAddresses);
        }
        if(this.initials){
        writer.writeStringValue("initials", this.initials);
        }
        if(this.jobTitle){
        writer.writeStringValue("jobTitle", this.jobTitle);
        }
        if(this.manager){
        writer.writeStringValue("manager", this.manager);
        }
        if(this.middleName){
        writer.writeStringValue("middleName", this.middleName);
        }
        if(this.mobilePhone){
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; this.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(new MultiValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.nickName){
        writer.writeStringValue("nickName", this.nickName);
        }
        if(this.officeLocation){
        writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.otherAddress){
        writer.writeObjectValue<PhysicalAddressImpl>("otherAddress", new PhysicalAddressImpl(this.otherAddress));
        }
        if(this.parentFolderId){
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        }
        if(this.personalNotes){
        writer.writeStringValue("personalNotes", this.personalNotes);
        }
        if(this.photo){
        writer.writeObjectValue<ProfilePhotoImpl>("photo", new ProfilePhotoImpl(this.photo));
        }
        if(this.profession){
        writer.writeStringValue("profession", this.profession);
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; this.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(new SingleValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
        if(this.spouseName){
        writer.writeStringValue("spouseName", this.spouseName);
        }
        if(this.surname){
        writer.writeStringValue("surname", this.surname);
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
        if(this.yomiCompanyName){
        writer.writeStringValue("yomiCompanyName", this.yomiCompanyName);
        }
        if(this.yomiGivenName){
        writer.writeStringValue("yomiGivenName", this.yomiGivenName);
        }
        if(this.yomiSurname){
        writer.writeStringValue("yomiSurname", this.yomiSurname);
        }
    };
}
