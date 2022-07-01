import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalOfficeAddressFromDiscriminatorValue} from './createPhysicalOfficeAddressFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectImpl, OnPremisesProvisioningErrorImpl, PhoneImpl, PhysicalOfficeAddressImpl} from './index';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {OrgContact} from './orgContact';
import {Phone} from './phone';
import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of orgContact entities. */
export class OrgContactImpl extends DirectoryObjectImpl implements OrgContact {
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
     * @returns a PhysicalOfficeAddressInterface
     */
    public get addresses() {
        return this._addresses;
    };
    /**
     * Sets the addresses property value. Postal addresses for this organizational contact. For now a contact can only have one physical address.
     * @param value Value to set for the addresses property.
     */
    public set addresses(value: PhysicalOfficeAddress[] | undefined) {
        if(value) {
            const addressesArrValue: PhysicalOfficeAddressImpl[] = [];
            this.addresses?.forEach(element => {
                addressesArrValue.push((element instanceof PhysicalOfficeAddressImpl? element as PhysicalOfficeAddressImpl:new PhysicalOfficeAddressImpl(element)));
            });
            this._addresses = addressesArrValue;
        }
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
        if(value) {
            this._companyName = value;
        }
    };
    /**
     * Instantiates a new orgContact and sets the default values.
     * @param orgContactParameterValue 
     */
    public constructor(orgContactParameterValue?: OrgContact | undefined) {
        super(orgContactParameterValue);
        this._addresses = orgContactParameterValue?.addresses;
        this._companyName = orgContactParameterValue?.companyName;
        this._department = orgContactParameterValue?.department;
        this._directReports = orgContactParameterValue?.directReports;
        this._displayName = orgContactParameterValue?.displayName;
        this._givenName = orgContactParameterValue?.givenName;
        this._jobTitle = orgContactParameterValue?.jobTitle;
        this._mail = orgContactParameterValue?.mail;
        this._mailNickname = orgContactParameterValue?.mailNickname;
        this._manager = orgContactParameterValue?.manager;
        this._memberOf = orgContactParameterValue?.memberOf;
        this._onPremisesLastSyncDateTime = orgContactParameterValue?.onPremisesLastSyncDateTime;
        this._onPremisesProvisioningErrors = orgContactParameterValue?.onPremisesProvisioningErrors;
        this._onPremisesSyncEnabled = orgContactParameterValue?.onPremisesSyncEnabled;
        this._phones = orgContactParameterValue?.phones;
        this._proxyAddresses = orgContactParameterValue?.proxyAddresses;
        this._surname = orgContactParameterValue?.surname;
        this._transitiveMemberOf = orgContactParameterValue?.transitiveMemberOf;
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
        if(value) {
            this._department = value;
        }
    };
    /**
     * Gets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get directReports() {
        return this._directReports;
    };
    /**
     * Sets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
     * @param value Value to set for the directReports property.
     */
    public set directReports(value: DirectoryObject[] | undefined) {
        if(value) {
            const directReportsArrValue: DirectoryObjectImpl[] = [];
            this.directReports?.forEach(element => {
                directReportsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._directReports = directReportsArrValue;
        }
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
            "addresses": n => { this.addresses = n.getCollectionOfObjectValues<PhysicalOfficeAddressImpl>(createPhysicalOfficeAddressFromDiscriminatorValue); },
            "companyName": n => { this.companyName = n.getStringValue(); },
            "department": n => { this.department = n.getStringValue(); },
            "directReports": n => { this.directReports = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "manager": n => { this.manager = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "memberOf": n => { this.memberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesProvisioningErrors": n => { this.onPremisesProvisioningErrors = n.getCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>(createOnPremisesProvisioningErrorFromDiscriminatorValue); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<PhoneImpl>(createPhoneFromDiscriminatorValue); },
            "proxyAddresses": n => { this.proxyAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "surname": n => { this.surname = n.getStringValue(); },
            "transitiveMemberOf": n => { this.transitiveMemberOf = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
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
        if(value) {
            this._givenName = value;
        }
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
        if(value) {
            this._jobTitle = value;
        }
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
        if(value) {
            this._mail = value;
        }
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
        if(value) {
            this._mailNickname = value;
        }
    };
    /**
     * Gets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
     * @param value Value to set for the manager property.
     */
    public set manager(value: DirectoryObject | undefined) {
        if(value) {
            this._manager = value instanceof DirectoryObjectImpl? value as DirectoryObjectImpl: new DirectoryObjectImpl(value);
        }
    };
    /**
     * Gets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const memberOfArrValue: DirectoryObjectImpl[] = [];
            this.memberOf?.forEach(element => {
                memberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._memberOf = memberOfArrValue;
        }
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
        if(value) {
            this._onPremisesLastSyncDateTime = value;
        }
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not).
     * @returns a OnPremisesProvisioningErrorInterface
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, not).
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        if(value) {
            const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = [];
            this.onPremisesProvisioningErrors?.forEach(element => {
                onPremisesProvisioningErrorsArrValue.push((element instanceof OnPremisesProvisioningErrorImpl? element as OnPremisesProvisioningErrorImpl:new OnPremisesProvisioningErrorImpl(element)));
            });
            this._onPremisesProvisioningErrors = onPremisesProvisioningErrorsArrValue;
        }
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
        if(value) {
            this._onPremisesSyncEnabled = value;
        }
    };
    /**
     * Gets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in).
     * @returns a PhoneInterface
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, not, in).
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        if(value) {
            const phonesArrValue: PhoneImpl[] = [];
            this.phones?.forEach(element => {
                phonesArrValue.push((element instanceof PhoneImpl? element as PhoneImpl:new PhoneImpl(element)));
            });
            this._phones = phonesArrValue;
        }
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
        if(value) {
            this._proxyAddresses = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addresses && this.addresses.length != 0){        const addressesArrValue: PhysicalOfficeAddressImpl[] = [];
        this.addresses?.forEach(element => {
            addressesArrValue.push((element instanceof PhysicalOfficeAddressImpl? element as PhysicalOfficeAddressImpl:new PhysicalOfficeAddressImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PhysicalOfficeAddressImpl>("addresses", addressesArrValue);
        }
        if(this.companyName){
            writer.writeStringValue("companyName", this.companyName);
        }
        if(this.department){
            writer.writeStringValue("department", this.department);
        }
        if(this.directReports && this.directReports.length != 0){        const directReportsArrValue: DirectoryObjectImpl[] = [];
        this.directReports?.forEach(element => {
            directReportsArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("directReports", directReportsArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.givenName){
            writer.writeStringValue("givenName", this.givenName);
        }
        if(this.jobTitle){
            writer.writeStringValue("jobTitle", this.jobTitle);
        }
        if(this.mail){
            writer.writeStringValue("mail", this.mail);
        }
        if(this.mailNickname){
            writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.manager){
            writer.writeObjectValue<DirectoryObjectImpl>("manager", (this.manager instanceof DirectoryObjectImpl? this.manager as DirectoryObjectImpl: new DirectoryObjectImpl(this.manager)));
        }
        if(this.memberOf && this.memberOf.length != 0){        const memberOfArrValue: DirectoryObjectImpl[] = [];
        this.memberOf?.forEach(element => {
            memberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("memberOf", memberOfArrValue);
        }
        if(this.onPremisesLastSyncDateTime){
            writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        }
        if(this.onPremisesProvisioningErrors && this.onPremisesProvisioningErrors.length != 0){        const onPremisesProvisioningErrorsArrValue: OnPremisesProvisioningErrorImpl[] = [];
        this.onPremisesProvisioningErrors?.forEach(element => {
            onPremisesProvisioningErrorsArrValue.push((element instanceof OnPremisesProvisioningErrorImpl? element as OnPremisesProvisioningErrorImpl:new OnPremisesProvisioningErrorImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OnPremisesProvisioningErrorImpl>("onPremisesProvisioningErrors", onPremisesProvisioningErrorsArrValue);
        }
        if(this.onPremisesSyncEnabled){
            writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        }
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = [];
        this.phones?.forEach(element => {
            phonesArrValue.push((element instanceof PhoneImpl? element as PhoneImpl:new PhoneImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PhoneImpl>("phones", phonesArrValue);
        }
        if(this.proxyAddresses){
            writer.writeCollectionOfPrimitiveValues<string>("proxyAddresses", this.proxyAddresses);
        }
        if(this.surname){
            writer.writeStringValue("surname", this.surname);
        }
        if(this.transitiveMemberOf && this.transitiveMemberOf.length != 0){        const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
        this.transitiveMemberOf?.forEach(element => {
            transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("transitiveMemberOf", transitiveMemberOfArrValue);
        }
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
        if(value) {
            this._surname = value;
        }
    };
    /**
     * Gets the transitiveMemberOf property value. The transitiveMemberOf property
     * @returns a DirectoryObjectInterface
     */
    public get transitiveMemberOf() {
        return this._transitiveMemberOf;
    };
    /**
     * Sets the transitiveMemberOf property value. The transitiveMemberOf property
     * @param value Value to set for the transitiveMemberOf property.
     */
    public set transitiveMemberOf(value: DirectoryObject[] | undefined) {
        if(value) {
            const transitiveMemberOfArrValue: DirectoryObjectImpl[] = [];
            this.transitiveMemberOf?.forEach(element => {
                transitiveMemberOfArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._transitiveMemberOf = transitiveMemberOfArrValue;
        }
    };
}
