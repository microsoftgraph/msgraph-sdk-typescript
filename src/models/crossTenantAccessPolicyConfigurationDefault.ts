import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {Entity} from './entity';
import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyConfigurationDefault extends Entity, Parsable {
    /**
     * Determines the default configuration for automatic user consent settings. The inboundAllowed and outboundAllowed properties are always false and cannot be updated in the default configuration. Read-only.
     */
    automaticUserConsentSettings?: InboundOutboundPolicyConfiguration | undefined;
    /**
     * Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B collaboration.
     */
    b2bCollaborationInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B collaboration.
     */
    b2bCollaborationOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B direct connect.
     */
    b2bDirectConnectInbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Defines your default configuration for users in your organization going outbound to access resources in another organization via Azure AD B2B direct connect.
     */
    b2bDirectConnectOutbound?: CrossTenantAccessPolicyB2BSetting | undefined;
    /**
     * Determines the default configuration for trusting other Conditional Access claims from external Azure AD organizations.
     */
    inboundTrust?: CrossTenantAccessPolicyInboundTrust | undefined;
    /**
     * If true, the default configuration is set to the system default configuration. If false, the default settings have been customized.
     */
    isServiceDefault?: boolean | undefined;
}
