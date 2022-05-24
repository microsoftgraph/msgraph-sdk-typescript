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

/** Provides operations to manage the collection of organization entities. */
export class OrganizationImpl extends DirectoryObjectImpl implements Organization, Parsable {
    /** The collection of service plans associated with the tenant. Not nullable. */
    public assignedPlans?: AssignedPlan[] | undefined;
    /** The branding property */
    public branding?: OrganizationalBranding | undefined;
    /** Telephone number for the organization. Although this is a string collection, only one number can be set for this property. */
    public businessPhones?: string[] | undefined;
    /** Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection. */
    public certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[] | undefined;
    /** City name of the address for the organization. */
    public city?: string | undefined;
    /** Country/region name of the address for the organization. */
    public country?: string | undefined;
    /** Country or region abbreviation for the organization in ISO 3166-2 format. */
    public countryLetterCode?: string | undefined;
    /** Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The display name for the tenant. */
    public displayName?: string | undefined;
    /** The collection of open extensions defined for the organization resource. Nullable. */
    public extensions?: Extension[] | undefined;
    /** Not nullable. */
    public marketingNotificationEmails?: string[] | undefined;
    /** Mobile device management authority. Possible values are: unknown, intune, sccm, office365. */
    public mobileDeviceManagementAuthority?: MdmAuthority | undefined;
    /** The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public onPremisesLastSyncDateTime?: Date | undefined;
    /** true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default). */
    public onPremisesSyncEnabled?: boolean | undefined;
    /** Postal code of the address for the organization. */
    public postalCode?: string | undefined;
    /** The preferred language for the organization. Should follow ISO 639-1 Code; for example en. */
    public preferredLanguage?: string | undefined;
    /** The privacy profile of an organization. */
    public privacyProfile?: PrivacyProfile | undefined;
    /** Not nullable. */
    public provisionedPlans?: ProvisionedPlan[] | undefined;
    /** The securityComplianceNotificationMails property */
    public securityComplianceNotificationMails?: string[] | undefined;
    /** The securityComplianceNotificationPhones property */
    public securityComplianceNotificationPhones?: string[] | undefined;
    /** State name of the address for the organization. */
    public state?: string | undefined;
    /** Street name of the address for organization. */
    public street?: string | undefined;
    /** Not nullable. */
    public technicalNotificationMails?: string[] | undefined;
    /** The tenantType property */
    public tenantType?: string | undefined;
    /** The collection of domains associated with this tenant. Not nullable. */
    public verifiedDomains?: VerifiedDomain[] | undefined;
    /**
     * Instantiates a new organization and sets the default values.
     * @param organizationParameterValue 
     */
    public constructor(organizationParameterValue?: Organization | undefined) {
        super();
        this.assignedPlans = organizationParameterValue?.assignedPlans ;
        this.branding = organizationParameterValue?.branding ;
        this.businessPhones = organizationParameterValue?.businessPhones ;
        this.certificateBasedAuthConfiguration = organizationParameterValue?.certificateBasedAuthConfiguration ;
        this.city = organizationParameterValue?.city ;
        this.country = organizationParameterValue?.country ;
        this.countryLetterCode = organizationParameterValue?.countryLetterCode ;
        this.createdDateTime = organizationParameterValue?.createdDateTime ;
        this.displayName = organizationParameterValue?.displayName ;
        this.extensions = organizationParameterValue?.extensions ;
        this.marketingNotificationEmails = organizationParameterValue?.marketingNotificationEmails ;
        this.mobileDeviceManagementAuthority = organizationParameterValue?.mobileDeviceManagementAuthority ;
        this.onPremisesLastSyncDateTime = organizationParameterValue?.onPremisesLastSyncDateTime ;
        this.onPremisesSyncEnabled = organizationParameterValue?.onPremisesSyncEnabled ;
        this.postalCode = organizationParameterValue?.postalCode ;
        this.preferredLanguage = organizationParameterValue?.preferredLanguage ;
        this.privacyProfile = organizationParameterValue?.privacyProfile ;
        this.provisionedPlans = organizationParameterValue?.provisionedPlans ;
        this.securityComplianceNotificationMails = organizationParameterValue?.securityComplianceNotificationMails ;
        this.securityComplianceNotificationPhones = organizationParameterValue?.securityComplianceNotificationPhones ;
        this.state = organizationParameterValue?.state ;
        this.street = organizationParameterValue?.street ;
        this.technicalNotificationMails = organizationParameterValue?.technicalNotificationMails ;
        this.tenantType = organizationParameterValue?.tenantType ;
        this.verifiedDomains = organizationParameterValue?.verifiedDomains ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignedPlans && this.assignedPlans.length != 0){        const assignedPlansArrValue: AssignedPlanImpl[] = []; this.assignedPlans?.forEach(element => {assignedPlansArrValue.push(new AssignedPlanImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedPlanImpl>("assignedPlans", assignedPlansArrValue);
        }
        if(this.branding){
        writer.writeObjectValue<OrganizationalBrandingImpl>("branding", new OrganizationalBrandingImpl(this.branding));
        }
        if(this.businessPhones){
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        }
        if(this.certificateBasedAuthConfiguration && this.certificateBasedAuthConfiguration.length != 0){        const certificateBasedAuthConfigurationArrValue: CertificateBasedAuthConfigurationImpl[] = []; this.certificateBasedAuthConfiguration?.forEach(element => {certificateBasedAuthConfigurationArrValue.push(new CertificateBasedAuthConfigurationImpl(element));});
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
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
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
        writer.writeObjectValue<PrivacyProfileImpl>("privacyProfile", new PrivacyProfileImpl(this.privacyProfile));
        }
        if(this.provisionedPlans && this.provisionedPlans.length != 0){        const provisionedPlansArrValue: ProvisionedPlanImpl[] = []; this.provisionedPlans?.forEach(element => {provisionedPlansArrValue.push(new ProvisionedPlanImpl(element));});
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
        if(this.verifiedDomains && this.verifiedDomains.length != 0){        const verifiedDomainsArrValue: VerifiedDomainImpl[] = []; this.verifiedDomains?.forEach(element => {verifiedDomainsArrValue.push(new VerifiedDomainImpl(element));});
        writer.writeCollectionOfObjectValues<VerifiedDomainImpl>("verifiedDomains", verifiedDomainsArrValue);
        }
    };
}
