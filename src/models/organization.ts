import {AssignedPlan} from './assignedPlan';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {MdmAuthority} from './mdmAuthority';
import {OrganizationalBranding} from './organizationalBranding';
import {PartnerTenantType} from './partnerTenantType';
import {PrivacyProfile} from './privacyProfile';
import {ProvisionedPlan} from './provisionedPlan';
import {VerifiedDomain} from './verifiedDomain';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Organization extends DirectoryObject, Parsable {
    /**
     * The collection of service plans associated with the tenant. Not nullable.
     */
    assignedPlans?: AssignedPlan[] | undefined;
    /**
     * Branding for the organization. Nullable.
     */
    branding?: OrganizationalBranding | undefined;
    /**
     * Telephone number for the organization. Although this is a string collection, only one number can be set for this property.
     */
    businessPhones?: string[] | undefined;
    /**
     * Navigation property to manage certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.
     */
    certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[] | undefined;
    /**
     * City name of the address for the organization.
     */
    city?: string | undefined;
    /**
     * Country/region name of the address for the organization.
     */
    country?: string | undefined;
    /**
     * Country or region abbreviation for the organization in ISO 3166-2 format.
     */
    countryLetterCode?: string | undefined;
    /**
     * Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * Two-letter ISO 3166 country code indicating the default service usage location of an organization.
     */
    defaultUsageLocation?: string | undefined;
    /**
     * The display name for the tenant.
     */
    displayName?: string | undefined;
    /**
     * The collection of open extensions defined for the organization. Read-only. Nullable.
     */
    extensions?: Extension[] | undefined;
    /**
     * Not nullable.
     */
    marketingNotificationEmails?: string[] | undefined;
    /**
     * Mobile device management authority.
     */
    mobileDeviceManagementAuthority?: MdmAuthority | undefined;
    /**
     * The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    onPremisesLastSyncDateTime?: Date | undefined;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced. Nullable. null if this object has never been synced from an on-premises directory (default).
     */
    onPremisesSyncEnabled?: boolean | undefined;
    /**
     * The type of partnership this tenant has with Microsoft. The possible values are: microsoftSupport, syndicatePartner, breadthPartner, breadthPartnerDelegatedAdmin, resellerPartnerDelegatedAdmin, valueAddedResellerPartnerDelegatedAdmin, unknownFutureValue. Nullable. For more information about the possible types, see partnerTenantType values.
     */
    partnerTenantType?: PartnerTenantType | undefined;
    /**
     * Postal code of the address for the organization.
     */
    postalCode?: string | undefined;
    /**
     * The preferred language for the organization. Should follow ISO 639-1 Code; for example, en.
     */
    preferredLanguage?: string | undefined;
    /**
     * The privacy profile of an organization.
     */
    privacyProfile?: PrivacyProfile | undefined;
    /**
     * Not nullable.
     */
    provisionedPlans?: ProvisionedPlan[] | undefined;
    /**
     * Not nullable.
     */
    securityComplianceNotificationMails?: string[] | undefined;
    /**
     * Not nullable.
     */
    securityComplianceNotificationPhones?: string[] | undefined;
    /**
     * State name of the address for the organization.
     */
    state?: string | undefined;
    /**
     * Street name of the address for organization.
     */
    street?: string | undefined;
    /**
     * Not nullable.
     */
    technicalNotificationMails?: string[] | undefined;
    /**
     * Not nullable. The tenant type option that was selected when the tenant was created. The possible values are:  AAD - An enterprise identity access management (IAM) service that serves business-to-employee and business-to-business (B2B) scenarios.  AAD B2C A customer identity access management (CIAM) service that serves business-to-consumer (B2C) scenarios.
     */
    tenantType?: string | undefined;
    /**
     * The collection of domains associated with this tenant. Not nullable.
     */
    verifiedDomains?: VerifiedDomain[] | undefined;
}
