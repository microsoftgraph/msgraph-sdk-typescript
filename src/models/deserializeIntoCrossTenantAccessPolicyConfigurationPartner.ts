import {createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue} from './createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue';
import {createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue} from './createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue';
import {createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue} from './createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue';
import {createInboundOutboundPolicyConfigurationFromDiscriminatorValue} from './createInboundOutboundPolicyConfigurationFromDiscriminatorValue';
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

export function deserializeIntoCrossTenantAccessPolicyConfigurationPartner(crossTenantAccessPolicyConfigurationPartner: CrossTenantAccessPolicyConfigurationPartner | undefined = {} as CrossTenantAccessPolicyConfigurationPartner) : Record<string, (node: ParseNode) => void> {
    return {
        "automaticUserConsentSettings": n => { crossTenantAccessPolicyConfigurationPartner.automaticUserConsentSettings = n.getObjectValue<InboundOutboundPolicyConfiguration>(createInboundOutboundPolicyConfigurationFromDiscriminatorValue); },
        "b2bCollaborationInbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bCollaborationInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bCollaborationOutbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bCollaborationOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bDirectConnectInbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectInbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "b2bDirectConnectOutbound": n => { crossTenantAccessPolicyConfigurationPartner.b2bDirectConnectOutbound = n.getObjectValue<CrossTenantAccessPolicyB2BSetting>(createCrossTenantAccessPolicyB2BSettingFromDiscriminatorValue); },
        "identitySynchronization": n => { crossTenantAccessPolicyConfigurationPartner.identitySynchronization = n.getObjectValue<CrossTenantIdentitySyncPolicyPartner>(createCrossTenantIdentitySyncPolicyPartnerFromDiscriminatorValue); },
        "inboundTrust": n => { crossTenantAccessPolicyConfigurationPartner.inboundTrust = n.getObjectValue<CrossTenantAccessPolicyInboundTrust>(createCrossTenantAccessPolicyInboundTrustFromDiscriminatorValue); },
        "isServiceProvider": n => { crossTenantAccessPolicyConfigurationPartner.isServiceProvider = n.getBooleanValue(); },
        "@odata.type": n => { crossTenantAccessPolicyConfigurationPartner.odataType = n.getStringValue(); },
        "tenantId": n => { crossTenantAccessPolicyConfigurationPartner.tenantId = n.getStringValue(); },
    }
}
