import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyInboundTrust extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specifies whether compliant devices from external Azure AD organizations are trusted.
     */
    isCompliantDeviceAccepted?: boolean | undefined;
    /**
     * Specifies whether hybrid Azure AD joined devices from external Azure AD organizations are trusted.
     */
    isHybridAzureADJoinedDeviceAccepted?: boolean | undefined;
    /**
     * Specifies whether MFA from external Azure AD organizations is trusted.
     */
    isMfaAccepted?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
