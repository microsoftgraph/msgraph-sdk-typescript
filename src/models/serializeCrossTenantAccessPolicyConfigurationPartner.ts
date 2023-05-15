import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyConfigurationPartner} from './crossTenantAccessPolicyConfigurationPartner';
import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {CrossTenantIdentitySyncPolicyPartner} from './crossTenantIdentitySyncPolicyPartner';
import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {serializeCrossTenantAccessPolicyB2BSetting} from './serializeCrossTenantAccessPolicyB2BSetting';
import {serializeCrossTenantAccessPolicyInboundTrust} from './serializeCrossTenantAccessPolicyInboundTrust';
import {serializeCrossTenantIdentitySyncPolicyPartner} from './serializeCrossTenantIdentitySyncPolicyPartner';
import {serializeInboundOutboundPolicyConfiguration} from './serializeInboundOutboundPolicyConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyConfigurationPartner(writer: SerializationWriter, crossTenantAccessPolicyConfigurationPartner: CrossTenantAccessPolicyConfigurationPartner | undefined = {} as CrossTenantAccessPolicyConfigurationPartner) : void {
        writer.writeObjectValue<InboundOutboundPolicyConfiguration>("automaticUserConsentSettings", crossTenantAccessPolicyConfigurationPartner.automaticUserConsentSettings, serializeInboundOutboundPolicyConfiguration);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationInbound", crossTenantAccessPolicyConfigurationPartner.b2bCollaborationInbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationOutbound", crossTenantAccessPolicyConfigurationPartner.b2bCollaborationOutbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectInbound", crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectInbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectOutbound", crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectOutbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantIdentitySyncPolicyPartner>("identitySynchronization", crossTenantAccessPolicyConfigurationPartner.identitySynchronization, serializeCrossTenantIdentitySyncPolicyPartner);
        writer.writeObjectValue<CrossTenantAccessPolicyInboundTrust>("inboundTrust", crossTenantAccessPolicyConfigurationPartner.inboundTrust, serializeCrossTenantAccessPolicyInboundTrust);
        writer.writeBooleanValue("isServiceProvider", crossTenantAccessPolicyConfigurationPartner.isServiceProvider);
        writer.writeStringValue("@odata.type", crossTenantAccessPolicyConfigurationPartner.odataType);
        writer.writeStringValue("tenantId", crossTenantAccessPolicyConfigurationPartner.tenantId);
        writer.writeAdditionalData(crossTenantAccessPolicyConfigurationPartner.additionalData);
}
