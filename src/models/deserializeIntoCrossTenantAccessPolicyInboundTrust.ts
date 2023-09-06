import { type CrossTenantAccessPolicyInboundTrust } from './crossTenantAccessPolicyInboundTrust';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyInboundTrust(crossTenantAccessPolicyInboundTrust: CrossTenantAccessPolicyInboundTrust | undefined = {} as CrossTenantAccessPolicyInboundTrust) : Record<string, (node: ParseNode) => void> {
    return {
        "isCompliantDeviceAccepted": n => { crossTenantAccessPolicyInboundTrust.isCompliantDeviceAccepted = n.getBooleanValue(); },
        "isHybridAzureADJoinedDeviceAccepted": n => { crossTenantAccessPolicyInboundTrust.isHybridAzureADJoinedDeviceAccepted = n.getBooleanValue(); },
        "isMfaAccepted": n => { crossTenantAccessPolicyInboundTrust.isMfaAccepted = n.getBooleanValue(); },
        "@odata.type": n => { crossTenantAccessPolicyInboundTrust.odataType = n.getStringValue(); },
    }
}
