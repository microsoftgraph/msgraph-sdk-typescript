import {createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue} from './createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue';
import {createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue} from './createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue';
import {createInboundOutboundPolicyConfigurationFromDiscriminatorValue} from './createInboundOutboundPolicyConfigurationFromDiscriminatorValue';
import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyConfigurationDefault} from './crossTenantAccessPolicyConfigurationDefault';
import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {serializeCrossTenantAccessPolicyB2BSetting} from './serializeCrossTenantAccessPolicyB2BSetting';
import {serializeCrossTenantAccessPolicyInboundTrust} from './serializeCrossTenantAccessPolicyInboundTrust';
import {serializeInboundOutboundPolicyConfiguration} from './serializeInboundOutboundPolicyConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyConfigurationDefault(crossTenantAccessPolicyConfigurationDefault: CrossTenantAccessPolicyConfigurationDefault | undefined = {} as CrossTenantAccessPolicyConfigurationDefault) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(crossTenantAccessPolicyConfigurationDefault),
        "automaticUserConsentSettings": n => { crossTenantAccessPolicyConfigurationDefault.automaticUserConsentSettings = n.getObjectValue<InboundOutboundPolicyConfiguration>(createInboundOutboundPolicyConfigurationFromDiscriminatorValue); },
        "b2bCollaborationInbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bCollaborationInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bCollaborationOutbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bCollaborationOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bDirectConnectInbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bDirectConnectOutbound": n => { crossTenantAccessPolicyConfigurationDefault.b2bDirectConnectOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "inboundTrust": n => { crossTenantAccessPolicyConfigurationDefault.inboundTrust = n.getObjectValue<CrossTenantAccessPolicyInboundTrust>(createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue); },
        "isServiceDefault": n => { crossTenantAccessPolicyConfigurationDefault.isServiceDefault = n.getBooleanValue(); },
    }
}
