import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyConfigurationDefault} from './crossTenantAccessPolicyConfigurationDefault';
import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {serializeCrossTenantAccessPolicyB2BSetting} from './serializeCrossTenantAccessPolicyB2BSetting';
import {serializeCrossTenantAccessPolicyInboundTrust} from './serializeCrossTenantAccessPolicyInboundTrust';
import {serializeEntity} from './serializeEntity';
import {serializeInboundOutboundPolicyConfiguration} from './serializeInboundOutboundPolicyConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyConfigurationDefault(writer: SerializationWriter, crossTenantAccessPolicyConfigurationDefault: CrossTenantAccessPolicyConfigurationDefault | undefined = {} as CrossTenantAccessPolicyConfigurationDefault) : void {
        serializeEntity(writer, crossTenantAccessPolicyConfigurationDefault)
        writer.writeObjectValue<InboundOutboundPolicyConfiguration>("automaticUserConsentSettings", crossTenantAccessPolicyConfigurationDefault.automaticUserConsentSettings, serializeInboundOutboundPolicyConfiguration);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationInbound", crossTenantAccessPolicyConfigurationDefault.b2bCollaborationInbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bCollaborationOutbound", crossTenantAccessPolicyConfigurationDefault.b2bCollaborationOutbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectInbound", crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectInbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantAccessPolicyB2BSetting>("b2bDirectConnectOutbound", crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectOutbound, serializeCrossTenantAccessPolicyB2BSetting);
        writer.writeObjectValue<CrossTenantAccessPolicyInboundTrust>("inboundTrust", crossTenantAccessPolicyConfigurationDefault.inboundTrust, serializeCrossTenantAccessPolicyInboundTrust);
        writer.writeBooleanValue("isServiceDefault", crossTenantAccessPolicyConfigurationDefault.isServiceDefault);
}
