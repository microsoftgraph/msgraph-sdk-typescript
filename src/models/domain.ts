import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createDomainDnsRecordFromDiscriminatorValue} from './createDomainDnsRecordFromDiscriminatorValue';
import {createDomainStateFromDiscriminatorValue} from './createDomainStateFromDiscriminatorValue';
import {createInternalDomainFederationFromDiscriminatorValue} from './createInternalDomainFederationFromDiscriminatorValue';
import {DirectoryObject, DomainDnsRecord, DomainState, Entity, InternalDomainFederation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Domain extends Entity implements Parsable {
    /** Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. This property is read-only and is not nullable. */
    private _authenticationType?: string | undefined;
    /** This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled. */
    private _availabilityStatus?: string | undefined;
    /** The objects such as users and groups that reference the domain ID. Read-only, Nullable. Supports $expand and $filter by the OData type of objects returned. For example /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group. */
    private _domainNameReferences?: DirectoryObject[] | undefined;
    /** Domain settings configured by customer when federated with Azure AD. Supports $expand. */
    private _federationConfiguration?: InternalDomainFederation[] | undefined;
    /** The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365. Otherwise, the value is true. Not nullable */
    private _isAdminManaged?: boolean | undefined;
    /** true if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable */
    private _isDefault?: boolean | undefined;
    /** true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable */
    private _isInitial?: boolean | undefined;
    /** true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable */
    private _isRoot?: boolean | undefined;
    /** true if the domain has completed domain ownership verification. Not nullable */
    private _isVerified?: boolean | undefined;
    /** The manufacturer property */
    private _manufacturer?: string | undefined;
    /** The model property */
    private _model?: string | undefined;
    /** Specifies the number of days before a user receives notification that their password will expire. If the property is not set, a default value of 14 days will be used. */
    private _passwordNotificationWindowInDays?: number | undefined;
    /** Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default value of 90 days will be used. */
    private _passwordValidityPeriodInDays?: number | undefined;
    /** DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Supports $expand. */
    private _serviceConfigurationRecords?: DomainDnsRecord[] | undefined;
    /** Status of asynchronous operations scheduled for the domain. */
    private _state?: DomainState | undefined;
    /** The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline,SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, Yammer. Not nullable. */
    private _supportedServices?: string[] | undefined;
    /** DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable. Supports $expand. */
    private _verificationDnsRecords?: DomainDnsRecord[] | undefined;
    /**
     * Gets the authenticationType property value. Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. This property is read-only and is not nullable.
     * @returns a string
     */
    public get authenticationType() {
        return this._authenticationType;
    };
    /**
     * Sets the authenticationType property value. Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. This property is read-only and is not nullable.
     * @param value Value to set for the authenticationType property.
     */
    public set authenticationType(value: string | undefined) {
        this._authenticationType = value;
    };
    /**
     * Gets the availabilityStatus property value. This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled.
     * @returns a string
     */
    public get availabilityStatus() {
        return this._availabilityStatus;
    };
    /**
     * Sets the availabilityStatus property value. This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled.
     * @param value Value to set for the availabilityStatus property.
     */
    public set availabilityStatus(value: string | undefined) {
        this._availabilityStatus = value;
    };
    /**
     * Instantiates a new Domain and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.domain";
    };
    /**
     * Gets the domainNameReferences property value. The objects such as users and groups that reference the domain ID. Read-only, Nullable. Supports $expand and $filter by the OData type of objects returned. For example /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group.
     * @returns a directoryObject
     */
    public get domainNameReferences() {
        return this._domainNameReferences;
    };
    /**
     * Sets the domainNameReferences property value. The objects such as users and groups that reference the domain ID. Read-only, Nullable. Supports $expand and $filter by the OData type of objects returned. For example /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group.
     * @param value Value to set for the domainNameReferences property.
     */
    public set domainNameReferences(value: DirectoryObject[] | undefined) {
        this._domainNameReferences = value;
    };
    /**
     * Gets the federationConfiguration property value. Domain settings configured by customer when federated with Azure AD. Supports $expand.
     * @returns a internalDomainFederation
     */
    public get federationConfiguration() {
        return this._federationConfiguration;
    };
    /**
     * Sets the federationConfiguration property value. Domain settings configured by customer when federated with Azure AD. Supports $expand.
     * @param value Value to set for the federationConfiguration property.
     */
    public set federationConfiguration(value: InternalDomainFederation[] | undefined) {
        this._federationConfiguration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationType": n => { this.authenticationType = n.getStringValue(); },
            "availabilityStatus": n => { this.availabilityStatus = n.getStringValue(); },
            "domainNameReferences": n => { this.domainNameReferences = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "federationConfiguration": n => { this.federationConfiguration = n.getCollectionOfObjectValues<InternalDomainFederation>(createInternalDomainFederationFromDiscriminatorValue); },
            "isAdminManaged": n => { this.isAdminManaged = n.getBooleanValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isInitial": n => { this.isInitial = n.getBooleanValue(); },
            "isRoot": n => { this.isRoot = n.getBooleanValue(); },
            "isVerified": n => { this.isVerified = n.getBooleanValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "passwordNotificationWindowInDays": n => { this.passwordNotificationWindowInDays = n.getNumberValue(); },
            "passwordValidityPeriodInDays": n => { this.passwordValidityPeriodInDays = n.getNumberValue(); },
            "serviceConfigurationRecords": n => { this.serviceConfigurationRecords = n.getCollectionOfObjectValues<DomainDnsRecord>(createDomainDnsRecordFromDiscriminatorValue); },
            "state": n => { this.state = n.getObjectValue<DomainState>(createDomainStateFromDiscriminatorValue); },
            "supportedServices": n => { this.supportedServices = n.getCollectionOfPrimitiveValues<string>(); },
            "verificationDnsRecords": n => { this.verificationDnsRecords = n.getCollectionOfObjectValues<DomainDnsRecord>(createDomainDnsRecordFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isAdminManaged property value. The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365. Otherwise, the value is true. Not nullable
     * @returns a boolean
     */
    public get isAdminManaged() {
        return this._isAdminManaged;
    };
    /**
     * Sets the isAdminManaged property value. The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365. Otherwise, the value is true. Not nullable
     * @param value Value to set for the isAdminManaged property.
     */
    public set isAdminManaged(value: boolean | undefined) {
        this._isAdminManaged = value;
    };
    /**
     * Gets the isDefault property value. true if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. true if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the isInitial property value. true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable
     * @returns a boolean
     */
    public get isInitial() {
        return this._isInitial;
    };
    /**
     * Sets the isInitial property value. true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable
     * @param value Value to set for the isInitial property.
     */
    public set isInitial(value: boolean | undefined) {
        this._isInitial = value;
    };
    /**
     * Gets the isRoot property value. true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable
     * @returns a boolean
     */
    public get isRoot() {
        return this._isRoot;
    };
    /**
     * Sets the isRoot property value. true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable
     * @param value Value to set for the isRoot property.
     */
    public set isRoot(value: boolean | undefined) {
        this._isRoot = value;
    };
    /**
     * Gets the isVerified property value. true if the domain has completed domain ownership verification. Not nullable
     * @returns a boolean
     */
    public get isVerified() {
        return this._isVerified;
    };
    /**
     * Sets the isVerified property value. true if the domain has completed domain ownership verification. Not nullable
     * @param value Value to set for the isVerified property.
     */
    public set isVerified(value: boolean | undefined) {
        this._isVerified = value;
    };
    /**
     * Gets the manufacturer property value. The manufacturer property
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. The manufacturer property
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the model property value. The model property
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. The model property
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the passwordNotificationWindowInDays property value. Specifies the number of days before a user receives notification that their password will expire. If the property is not set, a default value of 14 days will be used.
     * @returns a integer
     */
    public get passwordNotificationWindowInDays() {
        return this._passwordNotificationWindowInDays;
    };
    /**
     * Sets the passwordNotificationWindowInDays property value. Specifies the number of days before a user receives notification that their password will expire. If the property is not set, a default value of 14 days will be used.
     * @param value Value to set for the passwordNotificationWindowInDays property.
     */
    public set passwordNotificationWindowInDays(value: number | undefined) {
        this._passwordNotificationWindowInDays = value;
    };
    /**
     * Gets the passwordValidityPeriodInDays property value. Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default value of 90 days will be used.
     * @returns a integer
     */
    public get passwordValidityPeriodInDays() {
        return this._passwordValidityPeriodInDays;
    };
    /**
     * Sets the passwordValidityPeriodInDays property value. Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default value of 90 days will be used.
     * @param value Value to set for the passwordValidityPeriodInDays property.
     */
    public set passwordValidityPeriodInDays(value: number | undefined) {
        this._passwordValidityPeriodInDays = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("authenticationType", this.authenticationType);
        writer.writeStringValue("availabilityStatus", this.availabilityStatus);
        writer.writeCollectionOfObjectValues<DirectoryObject>("domainNameReferences", this.domainNameReferences);
        writer.writeCollectionOfObjectValues<InternalDomainFederation>("federationConfiguration", this.federationConfiguration);
        writer.writeBooleanValue("isAdminManaged", this.isAdminManaged);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isInitial", this.isInitial);
        writer.writeBooleanValue("isRoot", this.isRoot);
        writer.writeBooleanValue("isVerified", this.isVerified);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeNumberValue("passwordNotificationWindowInDays", this.passwordNotificationWindowInDays);
        writer.writeNumberValue("passwordValidityPeriodInDays", this.passwordValidityPeriodInDays);
        writer.writeCollectionOfObjectValues<DomainDnsRecord>("serviceConfigurationRecords", this.serviceConfigurationRecords);
        writer.writeObjectValue<DomainState>("state", this.state);
        writer.writeCollectionOfPrimitiveValues<string>("supportedServices", this.supportedServices);
        writer.writeCollectionOfObjectValues<DomainDnsRecord>("verificationDnsRecords", this.verificationDnsRecords);
    };
    /**
     * Gets the serviceConfigurationRecords property value. DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Supports $expand.
     * @returns a domainDnsRecord
     */
    public get serviceConfigurationRecords() {
        return this._serviceConfigurationRecords;
    };
    /**
     * Sets the serviceConfigurationRecords property value. DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Supports $expand.
     * @param value Value to set for the serviceConfigurationRecords property.
     */
    public set serviceConfigurationRecords(value: DomainDnsRecord[] | undefined) {
        this._serviceConfigurationRecords = value;
    };
    /**
     * Gets the state property value. Status of asynchronous operations scheduled for the domain.
     * @returns a domainState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Status of asynchronous operations scheduled for the domain.
     * @param value Value to set for the state property.
     */
    public set state(value: DomainState | undefined) {
        this._state = value;
    };
    /**
     * Gets the supportedServices property value. The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline,SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, Yammer. Not nullable.
     * @returns a string
     */
    public get supportedServices() {
        return this._supportedServices;
    };
    /**
     * Sets the supportedServices property value. The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline,SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, Yammer. Not nullable.
     * @param value Value to set for the supportedServices property.
     */
    public set supportedServices(value: string[] | undefined) {
        this._supportedServices = value;
    };
    /**
     * Gets the verificationDnsRecords property value. DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable. Supports $expand.
     * @returns a domainDnsRecord
     */
    public get verificationDnsRecords() {
        return this._verificationDnsRecords;
    };
    /**
     * Sets the verificationDnsRecords property value. DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable. Supports $expand.
     * @param value Value to set for the verificationDnsRecords property.
     */
    public set verificationDnsRecords(value: DomainDnsRecord[] | undefined) {
        this._verificationDnsRecords = value;
    };
}
