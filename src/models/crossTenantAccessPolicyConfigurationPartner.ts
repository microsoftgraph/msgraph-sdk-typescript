import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyConfigurationPartner extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The automaticUserConsentSettings property */
    automaticUserConsentSettings?: InboundOutboundPolicyConfiguration | undefined;
    /** Defines your partner-specific configuration for users from other organizations accessing your resources via Azure AD B2B collaboration. */
    b2bCollaborationInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration. */
    b2bCollaborationOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Defines your partner-specific configuration for users from other organizations accessing your resources via Azure B2B direct connect. */
    b2bDirectConnectInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Defines your partner-specific configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect. */
    b2bDirectConnectOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /** Determines the partner-specific configuration for trusting other Conditional Access claims from external Azure AD organizations. */
    inboundTrust?: CrossTenantAccessPolicyInboundTrust | undefined;
    /** Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization. */
    isServiceProvider?: boolean | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The tenant identifier for the partner Azure AD organization. Read-only. Key. */
    tenantId?: string | undefined;
}
