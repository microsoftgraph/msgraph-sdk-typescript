import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createOnPremisesProvisioningErrorFromDiscriminatorValue} from './createOnPremisesProvisioningErrorFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalOfficeAddressFromDiscriminatorValue} from './createPhysicalOfficeAddressFromDiscriminatorValue';
import {DirectoryObject, OnPremisesProvisioningError, Phone, PhysicalOfficeAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to orgContact.
 */
export class OrgContact extends DirectoryObject implements Parsable {
    /** The addresses property */
    private _addresses?: PhysicalOfficeAddress[] | undefined;
    /** The companyName property */
    private _companyName?: string | undefined;
    /** The department property */
    private _department?: string | undefined;
    /** The directReports property */
    private _directReports?: DirectoryObject[] | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The givenName property */
    private _givenName?: string | undefined;
    /** The jobTitle property */
    private _jobTitle?: string | undefined;
    /** The mail property */
    private _mail?: string | undefined;
    /** The mailNickname property */
    private _mailNickname?: string | undefined;
    /** The manager property */
    private _manager?: DirectoryObject | undefined;
    /** The memberOf property */
    private _memberOf?: DirectoryObject[] | undefined;
    /** The onPremisesLastSyncDateTime property */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** The onPremisesProvisioningErrors property */
    private _onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** The onPremisesSyncEnabled property */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** The phones property */
    private _phones?: Phone[] | undefined;
    /** The proxyAddresses property */
    private _proxyAddresses?: string[] | undefined;
    /** The surname property */
    private _surname?: string | undefined;
    /** The transitiveMemberOf property */
    private _transitiveMemberOf?: DirectoryObject[] | undefined;
    /**
     * Gets the addresses property value. The addresses property
     * @returns a physicalOfficeAddress
     */
    public get addresses() {
        return this._addresses;
    };
    /**
     * Sets the addresses property value. The addresses property
     * @param value Value to set for the addresses property.
     */
    public set addresses(value: PhysicalOfficeAddress[] | undefined) {
        this._addresses = value;
    };
    /**
     * Gets the companyName property value. The companyName property
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Sets the companyName property value. The companyName property
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        this._companyName = value;
    };
    /**
     * Instantiates a new orgContact and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.orgContact";
    };
    /**
     * Gets the department property value. The department property
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The department property
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Gets the directReports property value. The directReports property
     * @returns a directoryObject
     */
    public get directReports() {
        return this._directReports;
    };
    /**
     * Sets the directReports property value. The directReports property
     * @param value Value to set for the directReports property.
     */
    public set directReports(value: DirectoryObject[] | undefined) {
        this._directReports = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
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
     * Gets the givenName property value. The givenName property
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The givenName property
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
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
        this._jobTitle = value;
    };
    /**
     * Gets the mail property value. The mail property
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The mail property
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        this._mail = value;
    };
    /**
     * Gets the mailNickname property value. The mailNickname property
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mailNickname property
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the manager property value. The manager property
     * @returns a directoryObject
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The manager property
     * @param value Value to set for the manager property.
     */
    public set manager(value: DirectoryObject | undefined) {
        this._manager = value;
    };
    /**
     * Gets the memberOf property value. The memberOf property
     * @returns a directoryObject
     */
    public get memberOf() {
        return this._memberOf;
    };
    /**
     * Sets the memberOf property value. The memberOf property
     * @param value Value to set for the memberOf property.
     */
    public set memberOf(value: DirectoryObject[] | undefined) {
        this._memberOf = value;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. The onPremisesLastSyncDateTime property
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. The onPremisesLastSyncDateTime property
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Gets the onPremisesProvisioningErrors property value. The onPremisesProvisioningErrors property
     * @returns a onPremisesProvisioningError
     */
    public get onPremisesProvisioningErrors() {
        return this._onPremisesProvisioningErrors;
    };
    /**
     * Sets the onPremisesProvisioningErrors property value. The onPremisesProvisioningErrors property
     * @param value Value to set for the onPremisesProvisioningErrors property.
     */
    public set onPremisesProvisioningErrors(value: OnPremisesProvisioningError[] | undefined) {
        this._onPremisesProvisioningErrors = value;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. The onPremisesSyncEnabled property
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. The onPremisesSyncEnabled property
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Gets the phones property value. The phones property
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. The phones property
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Gets the proxyAddresses property value. The proxyAddresses property
     * @returns a string
     */
    public get proxyAddresses() {
        return this._proxyAddresses;
    };
    /**
     * Sets the proxyAddresses property value. The proxyAddresses property
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
