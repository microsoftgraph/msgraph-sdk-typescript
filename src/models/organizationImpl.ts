import {AssignedPlan} from './assignedPlan';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {createAssignedPlanFromDiscriminatorValue} from './createAssignedPlanFromDiscriminatorValue';
import {createCertificateBasedAuthConfigurationFromDiscriminatorValue} from './createCertificateBasedAuthConfigurationFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createOrganizationalBrandingFromDiscriminatorValue} from './createOrganizationalBrandingFromDiscriminatorValue';
import {createPrivacyProfileFromDiscriminatorValue} from './createPrivacyProfileFromDiscriminatorValue';
import {createProvisionedPlanFromDiscriminatorValue} from './createProvisionedPlanFromDiscriminatorValue';
import {createVerifiedDomainFromDiscriminatorValue} from './createVerifiedDomainFromDiscriminatorValue';
import {Extension} from './extension';
import {AssignedPlanImpl, CertificateBasedAuthConfigurationImpl, DirectoryObjectImpl, ExtensionImpl, OrganizationalBrandingImpl, PrivacyProfileImpl, ProvisionedPlanImpl, VerifiedDomainImpl} from './index';
import {MdmAuthority} from './mdmAuthority';
import {Organization} from './organization';
import {OrganizationalBranding} from './organizationalBranding';
import {PrivacyProfile} from './privacyProfile';
import {ProvisionedPlan} from './provisionedPlan';
import {VerifiedDomain} from './verifiedDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrganizationImpl extends DirectoryObjectImpl implements Organization {
    /** The collection of service plans associated with the tenant. Not nullable. */
    private _assignedPlans?: AssignedPlan[] | undefined;
    /** Resource to manage the default branding for the organization. Nullable. */
    private _branding?: OrganizationalBranding | undefined;
    /** Telephone number for the organization. Although this is a string collection, only one number can be set for this property. */
    private _businessPhones?: string[] | undefined;
    /** Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection. */
    private _certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[] | undefined;
    /** City name of the address for the organization. */
    private _city?: string | undefined;
    /** Country/region name of the address for the organization. */
    private _country?: string | undefined;
    /** Country or region abbreviation for the organization in ISO 3166-2 format. */
    private _countryLetterCode?: string | undefined;
    /** Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The display name for the tenant. */
    private _displayName?: string | undefined;
    /** The collection of open extensions defined for the organization resource. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** Not nullable. */
    private _marketingNotificationEmails?: string[] | undefined;
    /** Mobile device management authority. Possible values are: unknown, intune, sccm, office365. */
    private _mobileDeviceManagementAuthority?: MdmAuthority | undefined;
    /** The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _onPremisesLastSyncDateTime?: Date | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default). */
    private _onPremisesSyncEnabled?: boolean | undefined;
    /** Postal code of the address for the organization. */
    private _postalCode?: string | undefined;
    /** The preferred language for the organization. Should follow ISO 639-1 Code; for example en. */
    private _preferredLanguage?: string | undefined;
    /** The privacy profile of an organization. */
    private _privacyProfile?: PrivacyProfile | undefined;
    /** Not nullable. */
    private _provisionedPlans?: ProvisionedPlan[] | undefined;
    /** The securityComplianceNotificationMails property */
    private _securityComplianceNotificationMails?: string[] | undefined;
    /** The securityComplianceNotificationPhones property */
    private _securityComplianceNotificationPhones?: string[] | undefined;
    /** State name of the address for the organization. */
    private _state?: string | undefined;
    /** Street name of the address for organization. */
    private _street?: string | undefined;
    /** Not nullable. */
    private _technicalNotificationMails?: string[] | undefined;
    /** The tenantType property */
    private _tenantType?: string | undefined;
    /** The collection of domains associated with this tenant. Not nullable. */
    private _verifiedDomains?: VerifiedDomain[] | undefined;
    /**
     * Gets the assignedPlans property value. The collection of service plans associated with the tenant. Not nullable.
     * @returns a AssignedPlanInterface
     */
    public get assignedPlans() {
        return this._assignedPlans;
    };
    /**
     * Sets the assignedPlans property value. The collection of service plans associated with the tenant. Not nullable.
     * @param value Value to set for the assignedPlans property.
     */
    public set assignedPlans(value: AssignedPlan[] | undefined) {
        if(value) {
            const assignedPlansArrValue: AssignedPlanImpl[] = [];
            this.assignedPlans?.forEach(element => {
                assignedPlansArrValue.push((element instanceof AssignedPlanImpl? element:new AssignedPlanImpl(element)));
            });
            this._assignedPlans = assignedPlansArrValue;
        }
    };
    /**
     * Gets the branding property value. Resource to manage the default branding for the organization. Nullable.
     * @returns a OrganizationalBrandingInterface
     */
    public get branding() {
        return this._branding;
    };
    /**
     * Sets the branding property value. Resource to manage the default branding for the organization. Nullable.
     * @param value Value to set for the branding property.
     */
    public set branding(value: OrganizationalBranding | undefined) {
        if(value) {
            this._branding = value instanceof OrganizationalBrandingImpl? value : new OrganizationalBrandingImpl(value);
        }
    };
    /**
     * Gets the businessPhones property value. Telephone number for the organization. Although this is a string collection, only one number can be set for this property.
     * @returns a string
     */
    public get businessPhones() {
        return this._businessPhones;
    };
    /**
     * Sets the businessPhones property value. Telephone number for the organization. Although this is a string collection, only one number can be set for this property.
     * @param value Value to set for the businessPhones property.
     */
    public set businessPhones(value: string[] | undefined) {
        if(value) {
            this._businessPhones = value;
        }
    };
    /**
     * Gets the certificateBasedAuthConfiguration property value. Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.
     * @returns a CertificateBasedAuthConfigurationInterface
     */
    public get certificateBasedAuthConfiguration() {
        return this._certificateBasedAuthConfiguration;
    };
    /**
     * Sets the certificateBasedAuthConfiguration property value. Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.
     * @param value Value to set for the certificateBasedAuthConfiguration property.
     */
    public set certificateBasedAuthConfiguration(value: CertificateBasedAuthConfiguration[] | undefined) {
        if(value) {
            const certificateBasedAuthConfigurationArrValue: CertificateBasedAuthConfigurationImpl[] = [];
            this.certificateBasedAuthConfiguration?.forEach(element => {
                certificateBasedAuthConfigurationArrValue.push((element instanceof CertificateBasedAuthConfigurationImpl? element:new CertificateBasedAuthConfigurationImpl(element)));
            });
            this._certificateBasedAuthConfiguration = certificateBasedAuthConfigurationArrValue;
        }
    };
    /**
     * Gets the city property value. City name of the address for the organization.
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. City name of the address for the organization.
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        if(value) {
            this._city = value;
        }
    };
    /**
     * Instantiates a new Organization and sets the default values.
     * @param organizationParameterValue 
     */
    public constructor(organizationParameterValue?: Organization | undefined) {
        super(organizationParameterValue);
        this._assignedPlans = organizationParameterValue?.assignedPlans;
        this._branding = organizationParameterValue?.branding;
        this._businessPhones = organizationParameterValue?.businessPhones;
        this._certificateBasedAuthConfiguration = organizationParameterValue?.certificateBasedAuthConfiguration;
        this._city = organizationParameterValue?.city;
        this._country = organizationParameterValue?.country;
        this._countryLetterCode = organizationParameterValue?.countryLetterCode;
        this._createdDateTime = organizationParameterValue?.createdDateTime;
        this._displayName = organizationParameterValue?.displayName;
        this._extensions = organizationParameterValue?.extensions;
        this._marketingNotificationEmails = organizationParameterValue?.marketingNotificationEmails;
        this._mobileDeviceManagementAuthority = organizationParameterValue?.mobileDeviceManagementAuthority;
        this._onPremisesLastSyncDateTime = organizationParameterValue?.onPremisesLastSyncDateTime;
        this._onPremisesSyncEnabled = organizationParameterValue?.onPremisesSyncEnabled;
        this._postalCode = organizationParameterValue?.postalCode;
        this._preferredLanguage = organizationParameterValue?.preferredLanguage;
        this._privacyProfile = organizationParameterValue?.privacyProfile;
        this._provisionedPlans = organizationParameterValue?.provisionedPlans;
        this._securityComplianceNotificationMails = organizationParameterValue?.securityComplianceNotificationMails;
        this._securityComplianceNotificationPhones = organizationParameterValue?.securityComplianceNotificationPhones;
        this._state = organizationParameterValue?.state;
        this._street = organizationParameterValue?.street;
        this._technicalNotificationMails = organizationParameterValue?.technicalNotificationMails;
        this._tenantType = organizationParameterValue?.tenantType;
        this._verifiedDomains = organizationParameterValue?.verifiedDomains;
    };
    /**
     * Gets the country property value. Country/region name of the address for the organization.
     * @returns a string
     */
    public get country() {
        return this._country;
    };
    /**
     * Sets the country property value. Country/region name of the address for the organization.
     * @param value Value to set for the country property.
     */
    public set country(value: string | undefined) {
        if(value) {
            this._country = value;
        }
    };
    /**
     * Gets the countryLetterCode property value. Country or region abbreviation for the organization in ISO 3166-2 format.
     * @returns a string
     */
    public get countryLetterCode() {
        return this._countryLetterCode;
    };
    /**
     * Sets the countryLetterCode property value. Country or region abbreviation for the organization in ISO 3166-2 format.
     * @param value Value to set for the countryLetterCode property.
     */
    public set countryLetterCode(value: string | undefined) {
        if(value) {
            this._countryLetterCode = value;
        }
    };
    /**
     * Gets the createdDateTime property value. Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the displayName property value. The display name for the tenant.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the tenant.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the organization resource. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the organization resource. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedPlans": n => { this.assignedPlans = n.getCollectionOfObjectValues<AssignedPlanImpl>(createAssignedPlanFromDiscriminatorValue); },
            "branding": n => { this.branding = n.getObjectValue<OrganizationalBrandingImpl>(createOrganizationalBrandingFromDiscriminatorValue); },
            "businessPhones": n => { this.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
            "certificateBasedAuthConfiguration": n => { this.certificateBasedAuthConfiguration = n.getCollectionOfObjectValues<CertificateBasedAuthConfigurationImpl>(createCertificateBasedAuthConfigurationFromDiscriminatorValue); },
            "city": n => { this.city = n.getStringValue(); },
            "country": n => { this.country = n.getStringValue(); },
            "countryLetterCode": n => { this.countryLetterCode = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "marketingNotificationEmails": n => { this.marketingNotificationEmails = n.getCollectionOfPrimitiveValues<string>(); },
            "mobileDeviceManagementAuthority": n => { this.mobileDeviceManagementAuthority = n.getEnumValue<MdmAuthority>(MdmAuthority); },
            "onPremisesLastSyncDateTime": n => { this.onPremisesLastSyncDateTime = n.getDateValue(); },
            "onPremisesSyncEnabled": n => { this.onPremisesSyncEnabled = n.getBooleanValue(); },
            "postalCode": n => { this.postalCode = n.getStringValue(); },
            "preferredLanguage": n => { this.preferredLanguage = n.getStringValue(); },
            "privacyProfile": n => { this.privacyProfile = n.getObjectValue<PrivacyProfileImpl>(createPrivacyProfileFromDiscriminatorValue); },
            "provisionedPlans": n => { this.provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlanImpl>(createProvisionedPlanFromDiscriminatorValue); },
            "securityComplianceNotificationMails": n => { this.securityComplianceNotificationMails = n.getCollectionOfPrimitiveValues<string>(); },
            "securityComplianceNotificationPhones": n => { this.securityComplianceNotificationPhones = n.getCollectionOfPrimitiveValues<string>(); },
            "state": n => { this.state = n.getStringValue(); },
            "street": n => { this.street = n.getStringValue(); },
            "technicalNotificationMails": n => { this.technicalNotificationMails = n.getCollectionOfPrimitiveValues<string>(); },
            "tenantType": n => { this.tenantType = n.getStringValue(); },
            "verifiedDomains": n => { this.verifiedDomains = n.getCollectionOfObjectValues<VerifiedDomainImpl>(createVerifiedDomainFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the marketingNotificationEmails property value. Not nullable.
     * @returns a string
     */
    public get marketingNotificationEmails() {
        return this._marketingNotificationEmails;
    };
    /**
     * Sets the marketingNotificationEmails property value. Not nullable.
     * @param value Value to set for the marketingNotificationEmails property.
     */
    public set marketingNotificationEmails(value: string[] | undefined) {
        if(value) {
            this._marketingNotificationEmails = value;
        }
    };
    /**
     * Gets the mobileDeviceManagementAuthority property value. Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
     * @returns a mdmAuthority
     */
    public get mobileDeviceManagementAuthority() {
        return this._mobileDeviceManagementAuthority;
    };
    /**
     * Sets the mobileDeviceManagementAuthority property value. Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
     * @param value Value to set for the mobileDeviceManagementAuthority property.
     */
    public set mobileDeviceManagementAuthority(value: MdmAuthority | undefined) {
        if(value) {
            this._mobileDeviceManagementAuthority = value;
        }
    };
    /**
     * Gets the onPremisesLastSyncDateTime property value. The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get onPremisesLastSyncDateTime() {
        return this._onPremisesLastSyncDateTime;
    };
    /**
     * Sets the onPremisesLastSyncDateTime property value. The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the onPremisesLastSyncDateTime property.
     */
    public set onPremisesLastSyncDateTime(value: Date | undefined) {
        if(value) {
            this._onPremisesLastSyncDateTime = value;
        }
    };
    /**
     * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default).
     * @returns a boolean
     */
    public get onPremisesSyncEnabled() {
        return this._onPremisesSyncEnabled;
    };
    /**
     * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default).
     * @param value Value to set for the onPremisesSyncEnabled property.
     */
    public set onPremisesSyncEnabled(value: boolean | undefined) {
        if(value) {
            this._onPremisesSyncEnabled = value;
        }
    };
    /**
     * Gets the postalCode property value. Postal code of the address for the organization.
     * @returns a string
     */
    public get postalCode() {
        return this._postalCode;
    };
    /**
     * Sets the postalCode property value. Postal code of the address for the organization.
     * @param value Value to set for the postalCode property.
     */
    public set postalCode(value: string | undefined) {
        if(value) {
            this._postalCode = value;
        }
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for the organization. Should follow ISO 639-1 Code; for example en.
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for the organization. Should follow ISO 639-1 Code; for example en.
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        if(value) {
            this._preferredLanguage = value;
        }
    };
    /**
     * Gets the privacyProfile property value. The privacy profile of an organization.
     * @returns a PrivacyProfileInterface
     */
    public get privacyProfile() {
        return this._privacyProfile;
    };
    /**
     * Sets the privacyProfile property value. The privacy profile of an organization.
     * @param value Value to set for the privacyProfile property.
     */
    public set privacyProfile(value: PrivacyProfile | undefined) {
        if(value) {
            this._privacyProfile = value instanceof PrivacyProfileImpl? value : new PrivacyProfileImpl(value);
        }
    };
    /**
     * Gets the provisionedPlans property value. Not nullable.
     * @returns a ProvisionedPlanInterface
     */
    public get provisionedPlans() {
        return this._provisionedPlans;
    };
    /**
     * Sets the provisionedPlans property value. Not nullable.
     * @param value Value to set for the provisionedPlans property.
     */
    public set provisionedPlans(value: ProvisionedPlan[] | undefined) {
        if(value) {
            const provisionedPlansArrValue: ProvisionedPlanImpl[] = [];
            this.provisionedPlans?.forEach(element => {
                provisionedPlansArrValue.push((element instanceof ProvisionedPlanImpl? element:new ProvisionedPlanImpl(element)));
            });
            this._provisionedPlans = provisionedPlansArrValue;
        }
    };
    /**
     * Gets the securityComplianceNotificationMails property value. The securityComplianceNotificationMails property
     * @returns a string
     */
    public get securityComplianceNotificationMails() {
        return this._securityComplianceNotificationMails;
    };
    /**
     * Sets the securityComplianceNotificationMails property value. The securityComplianceNotificationMails property
     * @param value Value to set for the securityComplianceNotificationMails property.
     */
    public set securityComplianceNotificationMails(value: string[] | undefined) {
        if(value) {
            this._securityComplianceNotificationMails = value;
        }
    };
    /**
     * Gets the securityComplianceNotificationPhones property value. The securityComplianceNotificationPhones property
     * @returns a string
     */
    public get securityComplianceNotificationPhones() {
        return this._securityComplianceNotificationPhones;
    };
    /**
     * Sets the securityComplianceNotificationPhones property value. The securityComplianceNotificationPhones property
     * @param value Value to set for the securityComplianceNotificationPhones property.
     */
    public set securityComplianceNotificationPhones(value: string[] | undefined) {
        if(value) {
            this._securityComplianceNotificationPhones = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignedPlans && this.assignedPlans.length != 0){        const assignedPlansArrValue: AssignedPlanImpl[] = [];
        this.assignedPlans?.forEach(element => {
            assignedPlansArrValue.push((element instanceof AssignedPlanImpl? element:new AssignedPlanImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssignedPlanImpl>("assignedPlans", assignedPlansArrValue);
        }
        if(this.branding){
            writer.writeObjectValue<OrganizationalBrandingImpl>("branding", (!this.branding || this.branding instanceof OrganizationalBrandingImpl? this.branding : new OrganizationalBrandingImpl(this.branding)));
        }
        if(this.businessPhones){
            writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        }
        if(this.certificateBasedAuthConfiguration && this.certificateBasedAuthConfiguration.length != 0){        const certificateBasedAuthConfigurationArrValue: CertificateBasedAuthConfigurationImpl[] = [];
        this.certificateBasedAuthConfiguration?.forEach(element => {
            certificateBasedAuthConfigurationArrValue.push((element instanceof CertificateBasedAuthConfigurationImpl? element:new CertificateBasedAuthConfigurationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CertificateBasedAuthConfigurationImpl>("certificateBasedAuthConfiguration", certificateBasedAuthConfigurationArrValue);
        }
        if(this.city){
            writer.writeStringValue("city", this.city);
        }
        if(this.country){
            writer.writeStringValue("country", this.country);
        }
        if(this.countryLetterCode){
            writer.writeStringValue("countryLetterCode", this.countryLetterCode);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.marketingNotificationEmails){
            writer.writeCollectionOfPrimitiveValues<string>("marketingNotificationEmails", this.marketingNotificationEmails);
        }
        if(this.mobileDeviceManagementAuthority){
            writer.writeEnumValue<MdmAuthority>("mobileDeviceManagementAuthority", this.mobileDeviceManagementAuthority);
        }
        if(this.onPremisesLastSyncDateTime){
            writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        }
        if(this.onPremisesSyncEnabled){
            writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        }
        if(this.postalCode){
            writer.writeStringValue("postalCode", this.postalCode);
        }
        if(this.preferredLanguage){
            writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        }
        if(this.privacyProfile){
            writer.writeObjectValue<PrivacyProfileImpl>("privacyProfile", (!this.privacyProfile || this.privacyProfile instanceof PrivacyProfileImpl? this.privacyProfile : new PrivacyProfileImpl(this.privacyProfile)));
        }
        if(this.provisionedPlans && this.provisionedPlans.length != 0){        const provisionedPlansArrValue: ProvisionedPlanImpl[] = [];
        this.provisionedPlans?.forEach(element => {
            provisionedPlansArrValue.push((element instanceof ProvisionedPlanImpl? element:new ProvisionedPlanImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProvisionedPlanImpl>("provisionedPlans", provisionedPlansArrValue);
        }
        if(this.securityComplianceNotificationMails){
            writer.writeCollectionOfPrimitiveValues<string>("securityComplianceNotificationMails", this.securityComplianceNotificationMails);
        }
        if(this.securityComplianceNotificationPhones){
            writer.writeCollectionOfPrimitiveValues<string>("securityComplianceNotificationPhones", this.securityComplianceNotificationPhones);
        }
        if(this.state){
            writer.writeStringValue("state", this.state);
        }
        if(this.street){
            writer.writeStringValue("street", this.street);
        }
        if(this.technicalNotificationMails){
            writer.writeCollectionOfPrimitiveValues<string>("technicalNotificationMails", this.technicalNotificationMails);
        }
        if(this.tenantType){
            writer.writeStringValue("tenantType", this.tenantType);
        }
        if(this.verifiedDomains && this.verifiedDomains.length != 0){        const verifiedDomainsArrValue: VerifiedDomainImpl[] = [];
        this.verifiedDomains?.forEach(element => {
            verifiedDomainsArrValue.push((element instanceof VerifiedDomainImpl? element:new VerifiedDomainImpl(element)));
        });
            writer.writeCollectionOfObjectValues<VerifiedDomainImpl>("verifiedDomains", verifiedDomainsArrValue);
        }
    };
    /**
     * Gets the state property value. State name of the address for the organization.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. State name of the address for the organization.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the street property value. Street name of the address for organization.
     * @returns a string
     */
    public get street() {
        return this._street;
    };
    /**
     * Sets the street property value. Street name of the address for organization.
     * @param value Value to set for the street property.
     */
    public set street(value: string | undefined) {
        if(value) {
            this._street = value;
        }
    };
    /**
     * Gets the technicalNotificationMails property value. Not nullable.
     * @returns a string
     */
    public get technicalNotificationMails() {
        return this._technicalNotificationMails;
    };
    /**
     * Sets the technicalNotificationMails property value. Not nullable.
     * @param value Value to set for the technicalNotificationMails property.
     */
    public set technicalNotificationMails(value: string[] | undefined) {
        if(value) {
            this._technicalNotificationMails = value;
        }
    };
    /**
     * Gets the tenantType property value. The tenantType property
     * @returns a string
     */
    public get tenantType() {
        return this._tenantType;
    };
    /**
     * Sets the tenantType property value. The tenantType property
     * @param value Value to set for the tenantType property.
     */
    public set tenantType(value: string | undefined) {
        if(value) {
            this._tenantType = value;
        }
    };
    /**
     * Gets the verifiedDomains property value. The collection of domains associated with this tenant. Not nullable.
     * @returns a VerifiedDomainInterface
     */
    public get verifiedDomains() {
        return this._verifiedDomains;
    };
    /**
     * Sets the verifiedDomains property value. The collection of domains associated with this tenant. Not nullable.
     * @param value Value to set for the verifiedDomains property.
     */
    public set verifiedDomains(value: VerifiedDomain[] | undefined) {
        if(value) {
            const verifiedDomainsArrValue: VerifiedDomainImpl[] = [];
            this.verifiedDomains?.forEach(element => {
                verifiedDomainsArrValue.push((element instanceof VerifiedDomainImpl? element:new VerifiedDomainImpl(element)));
            });
            this._verifiedDomains = verifiedDomainsArrValue;
        }
    };
}
