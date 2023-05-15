import {AssignedPlan} from './assignedPlan';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {createAssignedPlanFromDiscriminatorValue} from './createAssignedPlanFromDiscriminatorValue';
import {createCertificateBasedAuthConfigurationFromDiscriminatorValue} from './createCertificateBasedAuthConfigurationFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createOrganizationalBrandingFromDiscriminatorValue} from './createOrganizationalBrandingFromDiscriminatorValue';
import {createPrivacyProfileFromDiscriminatorValue} from './createPrivacyProfileFromDiscriminatorValue';
import {createProvisionedPlanFromDiscriminatorValue} from './createProvisionedPlanFromDiscriminatorValue';
import {createVerifiedDomainFromDiscriminatorValue} from './createVerifiedDomainFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {Extension} from './extension';
import {MdmAuthority} from './mdmAuthority';
import {Organization} from './organization';
import {OrganizationalBranding} from './organizationalBranding';
import {PartnerTenantType} from './partnerTenantType';
import {PrivacyProfile} from './privacyProfile';
import {ProvisionedPlan} from './provisionedPlan';
import {serializeAssignedPlan} from './serializeAssignedPlan';
import {serializeCertificateBasedAuthConfiguration} from './serializeCertificateBasedAuthConfiguration';
import {serializeExtension} from './serializeExtension';
import {serializeOrganizationalBranding} from './serializeOrganizationalBranding';
import {serializePrivacyProfile} from './serializePrivacyProfile';
import {serializeProvisionedPlan} from './serializeProvisionedPlan';
import {serializeVerifiedDomain} from './serializeVerifiedDomain';
import {VerifiedDomain} from './verifiedDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganization(organization: Organization | undefined = {} as Organization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(organization),
        "assignedPlans": n => { organization.assignedPlans = n.getCollectionOfObjectValues<AssignedPlan>(createAssignedPlanFromDiscriminatorValue); },
        "branding": n => { organization.branding = n.getObjectValue<OrganizationalBranding>(createOrganizationalBrandingFromDiscriminatorValue); },
        "businessPhones": n => { organization.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
        "certificateBasedAuthConfiguration": n => { organization.certificateBasedAuthConfiguration = n.getCollectionOfObjectValues<CertificateBasedAuthConfiguration>(createCertificateBasedAuthConfigurationFromDiscriminatorValue); },
        "city": n => { organization.city = n.getStringValue(); },
        "country": n => { organization.country = n.getStringValue(); },
        "countryLetterCode": n => { organization.countryLetterCode = n.getStringValue(); },
        "createdDateTime": n => { organization.createdDateTime = n.getDateValue(); },
        "defaultUsageLocation": n => { organization.defaultUsageLocation = n.getStringValue(); },
        "displayName": n => { organization.displayName = n.getStringValue(); },
        "extensions": n => { organization.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "marketingNotificationEmails": n => { organization.marketingNotificationEmails = n.getCollectionOfPrimitiveValues<string>(); },
        "mobileDeviceManagementAuthority": n => { organization.mobileDeviceManagementAuthority = n.getEnumValue<MdmAuthority>(MdmAuthority); },
        "onPremisesLastSyncDateTime": n => { organization.onPremisesLastSyncDateTime = n.getDateValue(); },
        "onPremisesSyncEnabled": n => { organization.onPremisesSyncEnabled = n.getBooleanValue(); },
        "partnerTenantType": n => { organization.partnerTenantType = n.getEnumValue<PartnerTenantType>(PartnerTenantType); },
        "postalCode": n => { organization.postalCode = n.getStringValue(); },
        "preferredLanguage": n => { organization.preferredLanguage = n.getStringValue(); },
        "privacyProfile": n => { organization.privacyProfile = n.getObjectValue<PrivacyProfile>(createPrivacyProfileFromDiscriminatorValue); },
        "provisionedPlans": n => { organization.provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlan>(createProvisionedPlanFromDiscriminatorValue); },
        "securityComplianceNotificationMails": n => { organization.securityComplianceNotificationMails = n.getCollectionOfPrimitiveValues<string>(); },
        "securityComplianceNotificationPhones": n => { organization.securityComplianceNotificationPhones = n.getCollectionOfPrimitiveValues<string>(); },
        "state": n => { organization.state = n.getStringValue(); },
        "street": n => { organization.street = n.getStringValue(); },
        "technicalNotificationMails": n => { organization.technicalNotificationMails = n.getCollectionOfPrimitiveValues<string>(); },
        "tenantType": n => { organization.tenantType = n.getStringValue(); },
        "verifiedDomains": n => { organization.verifiedDomains = n.getCollectionOfObjectValues<VerifiedDomain>(createVerifiedDomainFromDiscriminatorValue); },
    }
}
