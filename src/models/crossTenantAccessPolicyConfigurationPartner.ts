import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {CrossTenantIdentitySyncPolicyPartner} from './crossTenantIdentitySyncPolicyPartner';
import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyConfigurationPartner extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Determines the partner-specific configuration for automatic user consent settings. Unless specifically configured, the inboundAllowed and outboundAllowed properties are null and inherit from the default settings, which is always false.
     */
    automaticUserConsentSettings?: InboundOutboundPolicyConfiguration | undefined;
    /**
     * Defines your partner-specific configuration for users from other organizations accessing your resources via Azure AD B2B collaboration.
     */
    b2bCollaborationInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration.
     */
    b2bCollaborationOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Defines your partner-specific configuration for users from other organizations accessing your resources via Azure B2B direct connect.
     */
    b2bDirectConnectInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect.
     */
    b2bDirectConnectOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Defines the cross-tenant policy for the synchronization of users from a partner tenant. Use this user synchronization policy to streamline collaboration between users in a multi-tenant organization by automating the creation, update, and deletion of users from one tenant to another.
     */
    identitySynchronization?: CrossTenantIdentitySyncPolicyPartner | undefined;
    /**
     * Determines the partner-specific configuration for trusting other Conditional Access claims from external Azure AD organizations.
     */
    inboundTrust?: CrossTenantAccessPolicyInboundTrust | undefined;
    /**
     * Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization.
     */
    isServiceProvider?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The tenant identifier for the partner Azure AD organization. Read-only. Key.
     */
    tenantId?: string | undefined;
}
