import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalOfficeAddressFromDiscriminatorValue} from './createPhysicalOfficeAddressFromDiscriminatorValue';
import {DirectoryObject, OnPremisesProvisioningError, Phone, PhysicalOfficeAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrgContact extends DirectoryObject implements Parsable {
    /** Postal addresses for this organizational contact. For now a contact can only have one physical address. */
    private _addresses?: PhysicalOfficeAddress[] | undefined;
    /** Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _companyName?: string | undefined;
    /** The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _department?: string | undefined;
    /** The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand. */
    private _directReports?: DirectoryObject[] | undefined;
    /** Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _givenName?: string | undefined;
    /** Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _jobTitle?: string | undefined;
    /** The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _mail?: string | undefined;
    /** Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values). */
    private _mailNickname?: string | undefined;
    /** The user or contact that is this contact's manager. Read-only. Supports $expand. */
    private _manager?: DirectoryObject | undefined;
    /** Groups that this contact is a member of. Read-only. Nullable. Supports $expand. */
    private _memberOf?: DirectoryObject[] | undefined;
    /** Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in). */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not). */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values). */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in). */
    private _phones?: Phone[] | undefined;
    /** For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections). */
    private _proxyAddresses?: string[] | undefined;
    /** Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values) */
    private _surname?: string | undefined;
    /** The transitiveMemberOf property */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Gets the addresses property value. Postal addresses for this organizational contact. For now a contact can only have one physical address.
     * @returns a physicalOfficeAddress
     */
    public get addresses() {
        return this._addresses;
    };
    /**
     * Sets the addresses property value. Postal addresses for this organizational contact. For now a contact can only have one physical address.
     * @param value Value to set for the addresses property.
     */
    public set addresses(value: PhysicalOfficeAddress[] | undefined) {
        this._addresses = value;
    };
    /**
     * Gets the companyName property value. Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Sets the companyName property value. Name of the company that this organizational contact belong to. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        this._companyName = value;
    };
    /**
     * Instantiates a new OrgContact and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the department property value. The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The name for the department in which the contact works. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Gets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get directReports() {
        return this._directReports;
    };
    /**
     * Sets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
     * @param value Value to set for the directReports property.
     */
    public set directReports(value: DirectoryObject[] | undefined) {
        this._directReports = value;
    };
    /**
     * Gets the displayName property value. Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addresses": n => { this.addresses = n.getCollectionOfObjectValues<PhysicalOfficeAddress>(createPhysicalOfficeAddressFromDiscriminatorValue); },
            "companyName": n => { this.companyName = n.getStringValue(); },
            "department": n => { this.department = n.getStringValue(); },
            "directReports": n => { this.directReports = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "manager": n => { this.manager = n.getObjectValue<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesProvisioningErrors": n => { this.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningError>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
            "proxyAddresses": n => { this.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "surname": n => { this.surname = n.getStringValue(); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the givenName property value. First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. First name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
    };
    /**
     * Gets the jobTitle property value. Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Sets the jobTitle property value. Job title for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    };
    /**
     * Gets the mail property value. The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        this._mail = value;
    };
    /**
     * Gets the mailNickname property value. Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values).
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
     * @returns a directoryObject
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
     * @param value Value to set for the manager property.
     */
    public set manager(value: DirectoryObject | undefined) {
        this._manager = value;
    };
    /**
     * Gets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in).
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, not, ge, le, in).
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not).
     * @returns a onPremisesProvisioningError
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        this._onPremisesProvisioningErrors = value;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).  Supports $filter (eq, ne, not, in, and eq on null values).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Gets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in).
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Gets the proxyAddresses property value. For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections).
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Sets the proxyAddresses property value. For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, not, ge, le, startsWith, and counting empty collections).
     * @param value Value to set for the proxyAddresses property.
     */
    public set proxyAddresses(value: string[] | undefined) {
        this._proxyAddresses = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PhysicalOfficeAddress>("addresses", this.addresses);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeCollectionOfObjectValues<DirectoryObject>("directReports", this.directReports);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("mail", this.mail);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeObjectValue<DirectoryObject>("manager", this.manager);
        writer.writeCollectionOfObjectValues<DirectoryObject>("memberOf", this.memberOf);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeCollectionOfObjectValues<OnPremisesProvisioningError>("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeCollectionOfObjectValues<Phone>("phones", this.phones);
        writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        writer.writeStringValue("surname", this.surname);
        writer.writeCollectionOfObjectValues<DirectoryObject>("transitiveMemberOf", this.transitiveMemberOf);
    };
    /**
     * Gets the surname property value. Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. Last name for this organizational contact. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values)
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        this._surname = value;
    };
    /**
     * Gets the transitiveMemberOf property value. The transitiveMemberOf property
     * @returns a directoryObject
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. The transitiveMemberOf property
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        this._transitiveMemberOf = value;
    };
}
