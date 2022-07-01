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

export class ContactImpl extends OutlookItemImpl implements Contact {
    /** The name of the contact's assistant. */
    private _assistantName?: string | undefined;
    /** The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _birthday?: Date | undefined;
    /** The contact's business address. */
    private _businessAddress?: PhysicalAddress | undefined;
    /** The business home page of the contact. */
    private _businessHomePage?: string | undefined;
    /** The contact's business phone numbers. */
    private _businessPhones?: string[] | undefined;
    /** The names of the contact's children. */
    private _children?: string[] | undefined;
    /** The name of the contact's company. */
    private _companyName?: string | undefined;
    /** The contact's department. */
    private _department?: string | undefined;
    /** The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation. */
    private _displayName?: string | undefined;
    /** The contact's email addresses. */
    private _emailAddresses?: EmailAddress[] | undefined;
    /** The collection of open extensions defined for the contact. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** The name the contact is filed under. */
    private _fileAs?: string | undefined;
    /** The contact's generation. */
    private _generation?: string | undefined;
    /** The contact's given name. */
    private _givenName?: string | undefined;
    /** The contact's home address. */
    private _homeAddress?: PhysicalAddress | undefined;
    /** The contact's home phone numbers. */
    private _homePhones?: string[] | undefined;
    /** The imAddresses property */
    private _imAddresses?: string[] | undefined;
    /** The initials property */
    private _initials?: string | undefined;
    /** The jobTitle property */
    private _jobTitle?: string | undefined;
    /** The manager property */
    private _manager?: string | undefined;
    /** The middleName property */
    private _middleName?: string | undefined;
    /** The mobilePhone property */
    private _mobilePhone?: string | undefined;
    /** The collection of multi-value extended properties defined for the contact. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The nickName property */
    private _nickName?: string | undefined;
    /** The officeLocation property */
    private _officeLocation?: string | undefined;
    /** The otherAddress property */
    private _otherAddress?: PhysicalAddress | undefined;
    /** The parentFolderId property */
    private _parentFolderId?: string | undefined;
    /** The personalNotes property */
    private _personalNotes?: string | undefined;
    /** Optional contact picture. You can get or set a photo for a contact. */
    private _photo?: ProfilePhoto | undefined;
    /** The profession property */
    private _profession?: string | undefined;
    /** The collection of single-value extended properties defined for the contact. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The spouseName property */
    private _spouseName?: string | undefined;
    /** The surname property */
    private _surname?: string | undefined;
    /** The title property */
    private _title?: string | undefined;
    /** The yomiCompanyName property */
    private _yomiCompanyName?: string | undefined;
    /** The yomiGivenName property */
    private _yomiGivenName?: string | undefined;
    /** The yomiSurname property */
    private _yomiSurname?: string | undefined;
    /**
     * Gets the assistantName property value. The name of the contact's assistant.
     * @returns a string
     */
    public get assistantName() {
        return this._assistantName;
    };
    /**
     * Sets the assistantName property value. The name of the contact's assistant.
     * @param value Value to set for the assistantName property.
     */
    public set assistantName(value: string | undefined) {
        if(value) {
            this._assistantName = value;
        }
    };
    /**
     * Gets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get birthday() {
        return this._birthday;
    };
    /**
     * Sets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the birthday property.
     */
    public set birthday(value: Date | undefined) {
        if(value) {
            this._birthday = value;
        }
    };
    /**
     * Gets the businessAddress property value. The contact's business address.
     * @returns a PhysicalAddressInterface
     */
    public get businessAddress() {
        return this._businessAddress;
    };
    /**
     * Sets the businessAddress property value. The contact's business address.
     * @param value Value to set for the businessAddress property.
     */
    public set businessAddress(value: PhysicalAddress | undefined) {
        if(value) {
            this._businessAddress = value instanceof PhysicalAddressImpl? value as PhysicalAddressImpl: new PhysicalAddressImpl(value);
        }
    };
    /**
     * Gets the businessHomePage property value. The business home page of the contact.
     * @returns a string
     */
    public get businessHomePage() {
        return this._businessHomePage;
    };
    /**
     * Sets the businessHomePage property value. The business home page of the contact.
     * @param value Value to set for the businessHomePage property.
     */
    public set businessHomePage(value: string | undefined) {
        if(value) {
            this._businessHomePage = value;
        }
    };
    /**
     * Gets the businessPhones property value. The contact's business phone numbers.
     * @returns a string
     */
    public get businessPhones() {
        return this._businessPhones;
    };
    /**
     * Sets the businessPhones property value. The contact's business phone numbers.
     * @param value Value to set for the businessPhones property.
     */
    public set businessPhones(value: string[] | undefined) {
        if(value) {
            this._businessPhones = value;
        }
    };
    /**
     * Gets the children property value. The names of the contact's children.
     * @returns a string
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. The names of the contact's children.
     * @param value Value to set for the children property.
     */
    public set children(value: string[] | undefined) {
        if(value) {
            this._children = value;
        }
    };
    /**
     * Gets the companyName property value. The name of the contact's company.
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Sets the companyName property value. The name of the contact's company.
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        if(value) {
            this._companyName = value;
        }
    };
    /**
     * Instantiates a new Contact and sets the default values.
     * @param contactParameterValue 
     */
    public constructor(contactParameterValue?: Contact | undefined) {
        super(contactParameterValue);
        this._assistantName = contactParameterValue?.assistantName;
        this._birthday = contactParameterValue?.birthday;
        this._businessAddress = contactParameterValue?.businessAddress;
        this._businessHomePage = contactParameterValue?.businessHomePage;
        this._businessPhones = contactParameterValue?.businessPhones;
        this._children = contactParameterValue?.children;
        this._companyName = contactParameterValue?.companyName;
        this._department = contactParameterValue?.department;
        this._displayName = contactParameterValue?.displayName;
        this._emailAddresses = contactParameterValue?.emailAddresses;
        this._extensions = contactParameterValue?.extensions;
        this._fileAs = contactParameterValue?.fileAs;
        this._generation = contactParameterValue?.generation;
        this._givenName = contactParameterValue?.givenName;
        this._homeAddress = contactParameterValue?.homeAddress;
        this._homePhones = contactParameterValue?.homePhones;
        this._imAddresses = contactParameterValue?.imAddresses;
        this._initials = contactParameterValue?.initials;
        this._jobTitle = contactParameterValue?.jobTitle;
        this._manager = contactParameterValue?.manager;
        this._middleName = contactParameterValue?.middleName;
        this._mobilePhone = contactParameterValue?.mobilePhone;
        this._multiValueExtendedProperties = contactParameterValue?.multiValueExtendedProperties;
        this._nickName = contactParameterValue?.nickName;
        this._officeLocation = contactParameterValue?.officeLocation;
        this._otherAddress = contactParameterValue?.otherAddress;
        this._parentFolderId = contactParameterValue?.parentFolderId;
        this._personalNotes = contactParameterValue?.personalNotes;
        this._photo = contactParameterValue?.photo;
        this._profession = contactParameterValue?.profession;
        this._singleValueExtendedProperties = contactParameterValue?.singleValueExtendedProperties;
        this._spouseName = contactParameterValue?.spouseName;
        this._surname = contactParameterValue?.surname;
        this._title = contactParameterValue?.title;
        this._yomiCompanyName = contactParameterValue?.yomiCompanyName;
        this._yomiGivenName = contactParameterValue?.yomiGivenName;
        this._yomiSurname = contactParameterValue?.yomiSurname;
    };
    /**
     * Gets the department property value. The contact's department.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The contact's department.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        if(value) {
            this._department = value;
        }
    };
    /**
     * Gets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the emailAddresses property value. The contact's email addresses.
     * @returns a EmailAddressInterface
     */
    public get emailAddresses() {
        return this._emailAddresses;
    };
    /**
     * Sets the emailAddresses property value. The contact's email addresses.
     * @param value Value to set for the emailAddresses property.
     */
    public set emailAddresses(value: EmailAddress[] | undefined) {
        if(value) {
            const emailAddressesArrValue: EmailAddressImpl[] = [];
            this.emailAddresses?.forEach(element => {
                emailAddressesArrValue.push((element instanceof EmailAddressImpl? element as EmailAddressImpl:new EmailAddressImpl(element)));
            });
            this._emailAddresses = emailAddressesArrValue;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the contact. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the contact. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element as ExtensionImpl:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
    };
    /**
     * Gets the fileAs property value. The name the contact is filed under.
     * @returns a string
     */
    public get fileAs() {
        return this._fileAs;
    };
    /**
     * Sets the fileAs property value. The name the contact is filed under.
     * @param value Value to set for the fileAs property.
     */
    public set fileAs(value: string | undefined) {
        if(value) {
            this._fileAs = value;
        }
    };
    /**
     * Gets the generation property value. The contact's generation.
     * @returns a string
     */
    public get generation() {
        return this._generation;
    };
    /**
     * Sets the generation property value. The contact's generation.
     * @param value Value to set for the generation property.
     */
    public set generation(value: string | undefined) {
        if(value) {
            this._generation = value;
        }
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
     * Gets the givenName property value. The contact's given name.
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The contact's given name.
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        if(value) {
            this._givenName = value;
        }
    };
    /**
     * Gets the homeAddress property value. The contact's home address.
     * @returns a PhysicalAddressInterface
     */
    public get homeAddress() {
        return this._homeAddress;
    };
    /**
     * Sets the homeAddress property value. The contact's home address.
     * @param value Value to set for the homeAddress property.
     */
    public set homeAddress(value: PhysicalAddress | undefined) {
        if(value) {
            this._homeAddress = value instanceof PhysicalAddressImpl? value as PhysicalAddressImpl: new PhysicalAddressImpl(value);
        }
    };
    /**
     * Gets the homePhones property value. The contact's home phone numbers.
     * @returns a string
     */
    public get homePhones() {
        return this._homePhones;
    };
    /**
     * Sets the homePhones property value. The contact's home phone numbers.
     * @param value Value to set for the homePhones property.
     */
    public set homePhones(value: string[] | undefined) {
        if(value) {
            this._homePhones = value;
        }
    };
    /**
     * Gets the imAddresses property value. The imAddresses property
     * @returns a string
     */
    public get imAddresses() {
        return this._imAddresses;
    };
    /**
     * Sets the imAddresses property value. The imAddresses property
     * @param value Value to set for the imAddresses property.
     */
    public set imAddresses(value: string[] | undefined) {
        if(value) {
            this._imAddresses = value;
        }
    };
    /**
     * Gets the initials property value. The initials property
     * @returns a string
     */
    public get initials() {
        return this._initials;
    };
    /**
     * Sets the initials property value. The initials property
     * @param value Value to set for the initials property.
     */
    public set initials(value: string | undefined) {
        if(value) {
            this._initials = value;
        }
    };
    /**
     * Gets the jobTitle property value. The jobTitle property
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Sets the jobTitle property value. The jobTitle property
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        if(value) {
            this._jobTitle = value;
        }
    };
    /**
     * Gets the manager property value. The manager property
     * @returns a string
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The manager property
     * @param value Value to set for the manager property.
     */
    public set manager(value: string | undefined) {
        if(value) {
            this._manager = value;
        }
    };
    /**
     * Gets the middleName property value. The middleName property
     * @returns a string
     */
    public get middleName() {
        return this._middleName;
    };
    /**
     * Sets the middleName property value. The middleName property
     * @param value Value to set for the middleName property.
     */
    public set middleName(value: string | undefined) {
        if(value) {
            this._middleName = value;
        }
    };
    /**
     * Gets the mobilePhone property value. The mobilePhone property
     * @returns a string
     */
    public get mobilePhone() {
        return this._mobilePhone;
    };
    /**
     * Sets the mobilePhone property value. The mobilePhone property
     * @param value Value to set for the mobilePhone property.
     */
    public set mobilePhone(value: string | undefined) {
        if(value) {
            this._mobilePhone = value;
        }
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
     * @returns a MultiValueLegacyExtendedPropertyInterface
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
            this.multiValueExtendedProperties?.forEach(element => {
                multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element as MultiValueLegacyExtendedPropertyImpl:new MultiValueLegacyExtendedPropertyImpl(element)));
            });
            this._multiValueExtendedProperties = multiValueExtendedPropertiesArrValue;
        }
    };
    /**
     * Gets the nickName property value. The nickName property
     * @returns a string
     */
    public get nickName() {
        return this._nickName;
    };
    /**
     * Sets the nickName property value. The nickName property
     * @param value Value to set for the nickName property.
     */
    public set nickName(value: string | undefined) {
        if(value) {
            this._nickName = value;
        }
    };
    /**
     * Gets the officeLocation property value. The officeLocation property
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. The officeLocation property
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        if(value) {
            this._officeLocation = value;
        }
    };
    /**
     * Gets the otherAddress property value. The otherAddress property
     * @returns a PhysicalAddressInterface
     */
    public get otherAddress() {
        return this._otherAddress;
    };
    /**
     * Sets the otherAddress property value. The otherAddress property
     * @param value Value to set for the otherAddress property.
     */
    public set otherAddress(value: PhysicalAddress | undefined) {
        if(value) {
            this._otherAddress = value instanceof PhysicalAddressImpl? value as PhysicalAddressImpl: new PhysicalAddressImpl(value);
        }
    };
    /**
     * Gets the parentFolderId property value. The parentFolderId property
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Sets the parentFolderId property value. The parentFolderId property
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        if(value) {
            this._parentFolderId = value;
        }
    };
    /**
     * Gets the personalNotes property value. The personalNotes property
     * @returns a string
     */
    public get personalNotes() {
        return this._personalNotes;
    };
    /**
     * Sets the personalNotes property value. The personalNotes property
     * @param value Value to set for the personalNotes property.
     */
    public set personalNotes(value: string | undefined) {
        if(value) {
            this._personalNotes = value;
        }
    };
    /**
     * Gets the photo property value. Optional contact picture. You can get or set a photo for a contact.
     * @returns a ProfilePhotoInterface
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. Optional contact picture. You can get or set a photo for a contact.
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        if(value) {
            this._photo = value instanceof ProfilePhotoImpl? value as ProfilePhotoImpl: new ProfilePhotoImpl(value);
        }
    };
    /**
     * Gets the profession property value. The profession property
     * @returns a string
     */
    public get profession() {
        return this._profession;
    };
    /**
     * Sets the profession property value. The profession property
     * @param value Value to set for the profession property.
     */
    public set profession(value: string | undefined) {
        if(value) {
            this._profession = value;
        }
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
            writer.writeObjectValue<PhysicalAddressImpl>("businessAddress", (this.businessAddress instanceof PhysicalAddressImpl? this.businessAddress as PhysicalAddressImpl: new PhysicalAddressImpl(this.businessAddress)));
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
        if(this.emailAddresses && this.emailAddresses.length != 0){        const emailAddressesArrValue: EmailAddressImpl[] = [];
        this.emailAddresses?.forEach(element => {
            emailAddressesArrValue.push((element instanceof EmailAddressImpl? element as EmailAddressImpl:new EmailAddressImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EmailAddressImpl>("emailAddresses", emailAddressesArrValue);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element as ExtensionImpl:new ExtensionImpl(element)));
        });
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
            writer.writeObjectValue<PhysicalAddressImpl>("homeAddress", (this.homeAddress instanceof PhysicalAddressImpl? this.homeAddress as PhysicalAddressImpl: new PhysicalAddressImpl(this.homeAddress)));
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
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
        this.multiValueExtendedProperties?.forEach(element => {
            multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element as MultiValueLegacyExtendedPropertyImpl:new MultiValueLegacyExtendedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.nickName){
            writer.writeStringValue("nickName", this.nickName);
        }
        if(this.officeLocation){
            writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.otherAddress){
            writer.writeObjectValue<PhysicalAddressImpl>("otherAddress", (this.otherAddress instanceof PhysicalAddressImpl? this.otherAddress as PhysicalAddressImpl: new PhysicalAddressImpl(this.otherAddress)));
        }
        if(this.parentFolderId){
            writer.writeStringValue("parentFolderId", this.parentFolderId);
        }
        if(this.personalNotes){
            writer.writeStringValue("personalNotes", this.personalNotes);
        }
        if(this.photo){
            writer.writeObjectValue<ProfilePhotoImpl>("photo", (this.photo instanceof ProfilePhotoImpl? this.photo as ProfilePhotoImpl: new ProfilePhotoImpl(this.photo)));
        }
        if(this.profession){
            writer.writeStringValue("profession", this.profession);
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
        this.singleValueExtendedProperties?.forEach(element => {
            singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element as SingleValueLegacyExtendedPropertyImpl:new SingleValueLegacyExtendedPropertyImpl(element)));
        });
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
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
     * @returns a SingleValueLegacyExtendedPropertyInterface
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
            this.singleValueExtendedProperties?.forEach(element => {
                singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element as SingleValueLegacyExtendedPropertyImpl:new SingleValueLegacyExtendedPropertyImpl(element)));
            });
            this._singleValueExtendedProperties = singleValueExtendedPropertiesArrValue;
        }
    };
    /**
     * Gets the spouseName property value. The spouseName property
     * @returns a string
     */
    public get spouseName() {
        return this._spouseName;
    };
    /**
     * Sets the spouseName property value. The spouseName property
     * @param value Value to set for the spouseName property.
     */
    public set spouseName(value: string | undefined) {
        if(value) {
            this._spouseName = value;
        }
    };
    /**
     * Gets the surname property value. The surname property
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. The surname property
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        if(value) {
            this._surname = value;
        }
    };
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        if(value) {
            this._title = value;
        }
    };
    /**
     * Gets the yomiCompanyName property value. The yomiCompanyName property
     * @returns a string
     */
    public get yomiCompanyName() {
        return this._yomiCompanyName;
    };
    /**
     * Sets the yomiCompanyName property value. The yomiCompanyName property
     * @param value Value to set for the yomiCompanyName property.
     */
    public set yomiCompanyName(value: string | undefined) {
        if(value) {
            this._yomiCompanyName = value;
        }
    };
    /**
     * Gets the yomiGivenName property value. The yomiGivenName property
     * @returns a string
     */
    public get yomiGivenName() {
        return this._yomiGivenName;
    };
    /**
     * Sets the yomiGivenName property value. The yomiGivenName property
     * @param value Value to set for the yomiGivenName property.
     */
    public set yomiGivenName(value: string | undefined) {
        if(value) {
            this._yomiGivenName = value;
        }
    };
    /**
     * Gets the yomiSurname property value. The yomiSurname property
     * @returns a string
     */
    public get yomiSurname() {
        return this._yomiSurname;
    };
    /**
     * Sets the yomiSurname property value. The yomiSurname property
     * @param value Value to set for the yomiSurname property.
     */
    public set yomiSurname(value: string | undefined) {
        if(value) {
            this._yomiSurname = value;
        }
    };
}
