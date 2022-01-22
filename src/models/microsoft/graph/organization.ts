import {AssignedPlan} from './assignedPlan';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {MdmAuthority} from './mdmAuthority';
import {OrganizationalBranding} from './organizationalBranding';
import {PrivacyProfile} from './privacyProfile';
import {ProvisionedPlan} from './provisionedPlan';
import {VerifiedDomain} from './verifiedDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Organization extends DirectoryObject implements Parsable {
    /** The collection of service plans associated with the tenant. Not nullable.  */
    private _assignedPlans?: AssignedPlan[] | undefined;
    private _branding?: OrganizationalBranding | undefined;
    /** Telephone number for the organization. Although this is a string collection, only one number can be set for this property.  */
    private _businessPhones?: string[] | undefined;
    /** Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.  */
    private _certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[] | undefined;
    /** City name of the address for the organization.  */
    private _city?: string | undefined;
    /** Country/region name of the address for the organization.  */
    private _country?: string | undefined;
    /** Country or region abbreviation for the organization in ISO 3166-2 format.  */
    private _countryLetterCode?: string | undefined;
    /** Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** The display name for the tenant.  */
    private _displayName?: string | undefined;
    /** The collection of open extensions defined for the organization resource. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** Not nullable.  */
    private _marketingNotificationEmails?: string[] | undefined;
    /** Mobile device management authority. Possible values are: unknown, intune, sccm, office365.  */
    private _mobileDeviceManagementAuthority?: MdmAuthority | undefined;
    /** The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default).  */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** Postal code of the address for the organization.  */
    private _postalCode?: string | undefined;
    /** The preferred language for the organization. Should follow ISO 639-1 Code; for example en.  */
    private _preferredLanguage?: string | undefined;
    /** The privacy profile of an organization.  */
    private _privacyProfile?: PrivacyProfile | undefined;
    /** Not nullable.  */
    private _provisionedPlans?: ProvisionedPlan[] | undefined;
    private _securityComplianceNotificationMails?: string[] | undefined;
    private _securityComplianceNotificationPhones?: string[] | undefined;
    /** State name of the address for the organization.  */
    private _state?: string | undefined;
    /** Street name of the address for organization.  */
    private _street?: string | undefined;
    /** Not nullable.  */
    private _technicalNotificationMails?: string[] | undefined;
    private _tenantType?: string | undefined;
    /** The collection of domains associated with this tenant. Not nullable.  */
    private _verifiedDomains?: VerifiedDomain[] | undefined;
    /**
     * Instantiates a new organization and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignedPlans property value. The collection of service plans associated with the tenant. Not nullable.
     * @returns a assignedPlan
     */
    public get assignedPlans() {
        return this._assignedPlans;
    };
    /**
     * Gets the branding property value. 
     * @returns a organizationalBranding
     */
    public get branding() {
        return this._branding;
    };
    /**
     * Gets the businessPhones property value. Telephone number for the organization. Although this is a string collection, only one number can be set for this property.
     * @returns a string
     */
    public get businessPhones() {
        return this._businessPhones;
    };
    /**
     * Gets the certificateBasedAuthConfiguration property value. Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.
     * @returns a certificateBasedAuthConfiguration
     */
    public get certificateBasedAuthConfiguration() {
        return this._certificateBasedAuthConfiguration;
    };
    /**
     * Gets the city property value. City name of the address for the organization.
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Gets the country property value. Country/region name of the address for the organization.
     * @returns a string
     */
    public get country() {
        return this._country;
    };
    /**
     * Gets the countryLetterCode property value. Country or region abbreviation for the organization in ISO 3166-2 format.
     * @returns a string
     */
    public get countryLetterCode() {
        return this._countryLetterCode;
    };
    /**
     * Gets the createdDateTime property value. Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the displayName property value. The display name for the tenant.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the organization resource. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the marketingNotificationEmails property value. Not nullable.
     * @returns a string
     */
    public get marketingNotificationEmails() {
        return this._marketingNotificationEmails;
    };
    /**
     * Gets the mobileDeviceManagementAuthority property value. Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
     * @returns a mdmAuthority
     */
    public get mobileDeviceManagementAuthority() {
        return this._mobileDeviceManagementAuthority;
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Gets the postalCode property value. Postal code of the address for the organization.
     * @returns a string
     */
    public get postalCode() {
        return this._postalCode;
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for the organization. Should follow ISO 639-1 Code; for example en.
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Gets the privacyProfile property value. The privacy profile of an organization.
     * @returns a privacyProfile
     */
    public get privacyProfile() {
        return this._privacyProfile;
    };
    /**
     * Gets the provisionedPlans property value. Not nullable.
     * @returns a provisionedPlan
     */
    public get provisionedPlans() {
        return this._provisionedPlans;
    };
    /**
     * Gets the securityComplianceNotificationMails property value. 
     * @returns a string
     */
    public get securityComplianceNotificationMails() {
        return this._securityComplianceNotificationMails;
    };
    /**
     * Gets the securityComplianceNotificationPhones property value. 
     * @returns a string
     */
    public get securityComplianceNotificationPhones() {
        return this._securityComplianceNotificationPhones;
    };
    /**
     * Gets the state property value. State name of the address for the organization.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the street property value. Street name of the address for organization.
     * @returns a string
     */
    public get street() {
        return this._street;
    };
    /**
     * Gets the technicalNotificationMails property value. Not nullable.
     * @returns a string
     */
    public get technicalNotificationMails() {
        return this._technicalNotificationMails;
    };
    /**
     * Gets the tenantType property value. 
     * @returns a string
     */
    public get tenantType() {
        return this._tenantType;
    };
    /**
     * Gets the verifiedDomains property value. The collection of domains associated with this tenant. Not nullable.
     * @returns a verifiedDomain
     */
    public get verifiedDomains() {
        return this._verifiedDomains;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignedPlans", (o, n) => { (o as unknown as Organization).assignedPlans = n.getCollectionOfObjectValues<AssignedPlan>(AssignedPlan); }],
            ["branding", (o, n) => { (o as unknown as Organization).branding = n.getObjectValue<OrganizationalBranding>(OrganizationalBranding); }],
            ["businessPhones", (o, n) => { (o as unknown as Organization).businessPhones = n.getCollectionOfPrimitiveValues<string>(); }],
            ["certificateBasedAuthConfiguration", (o, n) => { (o as unknown as Organization).certificateBasedAuthConfiguration = n.getCollectionOfObjectValues<CertificateBasedAuthConfiguration>(CertificateBasedAuthConfiguration); }],
            ["city", (o, n) => { (o as unknown as Organization).city = n.getStringValue(); }],
            ["country", (o, n) => { (o as unknown as Organization).country = n.getStringValue(); }],
            ["countryLetterCode", (o, n) => { (o as unknown as Organization).countryLetterCode = n.getStringValue(); }],
            ["createdDateTime", (o, n) => { (o as unknown as Organization).createdDateTime = n.getDateValue(); }],
            ["displayName", (o, n) => { (o as unknown as Organization).displayName = n.getStringValue(); }],
            ["extensions", (o, n) => { (o as unknown as Organization).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["marketingNotificationEmails", (o, n) => { (o as unknown as Organization).marketingNotificationEmails = n.getCollectionOfPrimitiveValues<string>(); }],
            ["mobileDeviceManagementAuthority", (o, n) => { (o as unknown as Organization).mobileDeviceManagementAuthority = n.getEnumValue<MdmAuthority>(MdmAuthority); }],
            ["onPremisesLastSyncDateTime", (o, n) => { (o as unknown as Organization).onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesSyncEnabled", (o, n) => { (o as unknown as Organization).onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["postalCode", (o, n) => { (o as unknown as Organization).postalCode = n.getStringValue(); }],
            ["preferredLanguage", (o, n) => { (o as unknown as Organization).preferredLanguage = n.getStringValue(); }],
            ["privacyProfile", (o, n) => { (o as unknown as Organization).privacyProfile = n.getObjectValue<PrivacyProfile>(PrivacyProfile); }],
            ["provisionedPlans", (o, n) => { (o as unknown as Organization).provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlan>(ProvisionedPlan); }],
            ["securityComplianceNotificationMails", (o, n) => { (o as unknown as Organization).securityComplianceNotificationMails = n.getCollectionOfPrimitiveValues<string>(); }],
            ["securityComplianceNotificationPhones", (o, n) => { (o as unknown as Organization).securityComplianceNotificationPhones = n.getCollectionOfPrimitiveValues<string>(); }],
            ["state", (o, n) => { (o as unknown as Organization).state = n.getStringValue(); }],
            ["street", (o, n) => { (o as unknown as Organization).street = n.getStringValue(); }],
            ["technicalNotificationMails", (o, n) => { (o as unknown as Organization).technicalNotificationMails = n.getCollectionOfPrimitiveValues<string>(); }],
            ["tenantType", (o, n) => { (o as unknown as Organization).tenantType = n.getStringValue(); }],
            ["verifiedDomains", (o, n) => { (o as unknown as Organization).verifiedDomains = n.getCollectionOfObjectValues<VerifiedDomain>(VerifiedDomain); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AssignedPlan>("assignedPlans", this.assignedPlans);
        writer.writeObjectValue<OrganizationalBranding>("branding", this.branding);
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        writer.writeCollectionOfObjectValues<CertificateBasedAuthConfiguration>("certificateBasedAuthConfiguration", this.certificateBasedAuthConfiguration);
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("country", this.country);
        writer.writeStringValue("countryLetterCode", this.countryLetterCode);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeCollectionOfPrimitiveValues<string>("marketingNotificationEmails", this.marketingNotificationEmails);
        writer.writeEnumValue<MdmAuthority>("mobileDeviceManagementAuthority", this.mobileDeviceManagementAuthority);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("postalCode", this.postalCode);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeObjectValue<PrivacyProfile>("privacyProfile", this.privacyProfile);
        writer.writeCollectionOfObjectValues<ProvisionedPlan>("provisionedPlans", this.provisionedPlans);
        writer.writeCollectionOfPrimitiveValues<string>("securityComplianceNotificationMails", this.securityComplianceNotificationMails);
        writer.writeCollectionOfPrimitiveValues<string>("securityComplianceNotificationPhones", this.securityComplianceNotificationPhones);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("street", this.street);
        writer.writeCollectionOfPrimitiveValues<string>("technicalNotificationMails", this.technicalNotificationMails);
        writer.writeStringValue("tenantType", this.tenantType);
        writer.writeCollectionOfObjectValues<VerifiedDomain>("verifiedDomains", this.verifiedDomains);
    };
    /**
     * Sets the assignedPlans property value. The collection of service plans associated with the tenant. Not nullable.
     * @param value Value to set for the assignedPlans property.
     */
    public set assignedPlans(value: AssignedPlan[] | undefined) {
        this._assignedPlans = value;
    };
    /**
     * Sets the branding property value. 
     * @param value Value to set for the branding property.
     */
    public set branding(value: OrganizationalBranding | undefined) {
        this._branding = value;
    };
    /**
     * Sets the businessPhones property value. Telephone number for the organization. Although this is a string collection, only one number can be set for this property.
     * @param value Value to set for the businessPhones property.
     */
    public set businessPhones(value: string[] | undefined) {
        this._businessPhones = value;
    };
    /**
     * Sets the certificateBasedAuthConfiguration property value. Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.
     * @param value Value to set for the certificateBasedAuthConfiguration property.
     */
    public set certificateBasedAuthConfiguration(value: CertificateBasedAuthConfiguration[] | undefined) {
        this._certificateBasedAuthConfiguration = value;
    };
    /**
     * Sets the city property value. City name of the address for the organization.
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Sets the country property value. Country/region name of the address for the organization.
     * @param value Value to set for the country property.
     */
    public set country(value: string | undefined) {
        this._country = value;
    };
    /**
     * Sets the countryLetterCode property value. Country or region abbreviation for the organization in ISO 3166-2 format.
     * @param value Value to set for the countryLetterCode property.
     */
    public set countryLetterCode(value: string | undefined) {
        this._countryLetterCode = value;
    };
    /**
     * Sets the createdDateTime property value. Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the displayName property value. The display name for the tenant.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the organization resource. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the marketingNotificationEmails property value. Not nullable.
     * @param value Value to set for the marketingNotificationEmails property.
     */
    public set marketingNotificationEmails(value: string[] | undefined) {
        this._marketingNotificationEmails = value;
    };
    /**
     * Sets the mobileDeviceManagementAuthority property value. Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
     * @param value Value to set for the mobileDeviceManagementAuthority property.
     */
    public set mobileDeviceManagementAuthority(value: MdmAuthority | undefined) {
        this._mobileDeviceManagementAuthority = value;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        this._onPremisesLastSyncDateTime = value;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        this._onPremisesSyncEnabled = value;
    };
    /**
     * Sets the postalCode property value. Postal code of the address for the organization.
     * @param value Value to set for the postalCode property.
     */
    public set postalCode(value: string | undefined) {
        this._postalCode = value;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for the organization. Should follow ISO 639-1 Code; for example en.
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        this._preferredLanguage = value;
    };
    /**
     * Sets the privacyProfile property value. The privacy profile of an organization.
     * @param value Value to set for the privacyProfile property.
     */
    public set privacyProfile(value: PrivacyProfile | undefined) {
        this._privacyProfile = value;
    };
    /**
     * Sets the provisionedPlans property value. Not nullable.
     * @param value Value to set for the provisionedPlans property.
     */
    public set provisionedPlans(value: ProvisionedPlan[] | undefined) {
        this._provisionedPlans = value;
    };
    /**
     * Sets the securityComplianceNotificationMails property value. 
     * @param value Value to set for the securityComplianceNotificationMails property.
     */
    public set securityComplianceNotificationMails(value: string[] | undefined) {
        this._securityComplianceNotificationMails = value;
    };
    /**
     * Sets the securityComplianceNotificationPhones property value. 
     * @param value Value to set for the securityComplianceNotificationPhones property.
     */
    public set securityComplianceNotificationPhones(value: string[] | undefined) {
        this._securityComplianceNotificationPhones = value;
    };
    /**
     * Sets the state property value. State name of the address for the organization.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Sets the street property value. Street name of the address for organization.
     * @param value Value to set for the street property.
     */
    public set street(value: string | undefined) {
        this._street = value;
    };
    /**
     * Sets the technicalNotificationMails property value. Not nullable.
     * @param value Value to set for the technicalNotificationMails property.
     */
    public set technicalNotificationMails(value: string[] | undefined) {
        this._technicalNotificationMails = value;
    };
    /**
     * Sets the tenantType property value. 
     * @param value Value to set for the tenantType property.
     */
    public set tenantType(value: string | undefined) {
        this._tenantType = value;
    };
    /**
     * Sets the verifiedDomains property value. The collection of domains associated with this tenant. Not nullable.
     * @param value Value to set for the verifiedDomains property.
     */
    public set verifiedDomains(value: VerifiedDomain[] | undefined) {
        this._verifiedDomains = value;
    };
}
