import {DirectoryObject} from './directoryObject';
import {DomainDnsRecord} from './domainDnsRecord';
import {DomainState} from './domainState';
import {Entity} from './entity';
import {InternalDomainFederation} from './internalDomainFederation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Domain extends Entity, Parsable {
    /**
     * Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. Not nullable.
     */
    authenticationType?: string | undefined;
    /**
     * This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled.
     */
    availabilityStatus?: string | undefined;
    /**
     * The objects such as users and groups that reference the domain ID. Read-only, Nullable. Supports $expand and $filter by the OData type of objects returned. For example /domains/{domainId}/domainNameReferences/microsoft.graph.user and /domains/{domainId}/domainNameReferences/microsoft.graph.group.
     */
    domainNameReferences?: DirectoryObject[] | undefined;
    /**
     * Domain settings configured by a customer when federated with Azure AD. Supports $expand.
     */
    federationConfiguration?: InternalDomainFederation[] | undefined;
    /**
     * The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365. Otherwise, the value is true. Not nullable
     */
    isAdminManaged?: boolean | undefined;
    /**
     * true if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable
     */
    isDefault?: boolean | undefined;
    /**
     * true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable
     */
    isInitial?: boolean | undefined;
    /**
     * true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable
     */
    isRoot?: boolean | undefined;
    /**
     * true if the domain has completed domain ownership verification. Not nullable
     */
    isVerified?: boolean | undefined;
    /**
     * The manufacturer property
     */
    manufacturer?: string | undefined;
    /**
     * The model property
     */
    model?: string | undefined;
    /**
     * Specifies the number of days before a user receives notification that their password will expire. If the property is not set, a default value of 14 days will be used.
     */
    passwordNotificationWindowInDays?: number | undefined;
    /**
     * Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default value of 90 days will be used.
     */
    passwordValidityPeriodInDays?: number | undefined;
    /**
     * DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable. Supports $expand.
     */
    serviceConfigurationRecords?: DomainDnsRecord[] | undefined;
    /**
     * Status of asynchronous operations scheduled for the domain.
     */
    state?: DomainState | undefined;
    /**
     * The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, Yammer. Not nullable.
     */
    supportedServices?: string[] | undefined;
    /**
     * DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable. Supports $expand.
     */
    verificationDnsRecords?: DomainDnsRecord[] | undefined;
}
