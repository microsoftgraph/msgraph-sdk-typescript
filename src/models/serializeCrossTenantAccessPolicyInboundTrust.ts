import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyInboundTrust(crossTenantAccessPolicyInboundTrust: CrossTenantAccessPolicyInboundTrust | undefined = {} as CrossTenantAccessPolicyInboundTrust, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isCompliantDeviceAccepted", crossTenantAccessPolicyInboundTrust.isCompliantDeviceAccepted);
        writer.writeBooleanValue("isHybridAzureADJoinedDeviceAccepted", crossTenantAccessPolicyInboundTrust.isHybridAzureADJoinedDeviceAccepted);
        writer.writeBooleanValue("isMfaAccepted", crossTenantAccessPolicyInboundTrust.isMfaAccepted);
        writer.writeStringValue("@odata.type", crossTenantAccessPolicyInboundTrust.odataType);
        writer.writeAdditionalData(crossTenantAccessPolicyInboundTrust.additionalData);
}
