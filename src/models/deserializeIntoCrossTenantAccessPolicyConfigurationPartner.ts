import {createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue} from './createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue';
import {createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue} from './createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue';
import {createInboundOutboundPolicyConfigurationFromDiscriminatorValue} from './createInboundOutboundPolicyConfigurationFromDiscriminatorValue';
import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyConfigurationPartner} from './crossTenantAccessPolicyConfigurationPartner';
import {CrossTenantAccessPolicyInboundTrust} from './crossTenantAccessPolicyInboundTrust';
import {InboundOutboundPolicyConfiguration} from './inboundOutboundPolicyConfiguration';
import {serializeCrossTenantAccessPolicyB2BSetting} from './serializeCrossTenantAccessPolicyB2BSetting';
import {serializeCrossTenantAccessPolicyInboundTrust} from './serializeCrossTenantAccessPolicyInboundTrust';
import {serializeInboundOutboundPolicyConfiguration} from './serializeInboundOutboundPolicyConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyConfigurationPartner(crossTenantAccessPolicyConfigurationPartner: CrossTenantAccessPolicyConfigurationPartner | undefined = {} as CrossTenantAccessPolicyConfigurationPartner) : Record<string, (node: ParseNode) => void> {
    return {
        "automaticUserConsentSettings": n => { crossTenantAccessPolicyConfigurationPartner.automaticUserConsentSettings = n.getObjectValue<InboundOutboundPolicyConfiguration>(createInboundOutboundPolicyConfigurationFromDiscriminatorValue); },
        "b2bCollaborationInbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bCollaborationInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bCollaborationOutbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bCollaborationOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bDirectConnectInbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bDirectConnectOutbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "inboundTrust": n => { crossTenantAccessPolicyConfigurationPartner.inboundTrust = n.getObjectValue<CrossTenantAccessPolicyInboundTrust>(createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue); },
        "isServiceProvider": n => { crossTenantAccessPolicyConfigurationPartner.isServiceProvider = n.getBooleanValue(); },
        "@odata.type": n => { crossTenantAccessPolicyConfigurationPartner.odataType = n.getStringValue(); },
        "tenantId": n => { crossTenantAccessPolicyConfigurationPartner.tenantId = n.getStringValue(); },
    }
}
