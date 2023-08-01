import {createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue} from './createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue';
import {createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue} from './createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue';
import type {CrossTenantAccessPolicy} from './crossTenantAccessPolicy';
import type {CrossTenantAccessPolicyConfigurationDefault} from './crossTenantAccessPolicyConfigurationDefault';
import type {CrossTenantAccessPolicyConfigurationPartner} from './crossTenantAccessPolicyConfigurationPartner';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {serializeCrossTenantAccessPolicyConfigurationDefault} from './serializeCrossTenantAccessPolicyConfigurationDefault';
import {serializeCrossTenantAccessPolicyConfigurationPartner} from './serializeCrossTenantAccessPolicyConfigurationPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicy(crossTenantAccessPolicy: CrossTenantAccessPolicy | undefined = {} as CrossTenantAccessPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(crossTenantAccessPolicy),
        "allowedCloudEndpoints": n => { crossTenantAccessPolicy.allowedCloudEndpoints = n.getCollectionOfPrimitiveValues<string>(); },
        "default": n => { crossTenantAccessPolicy.defaultEscaped = n.getObjectValue<CrossTenantAccessPolicyConfigurationDefault>(createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue); },
        "partners": n => { crossTenantAccessPolicy.partners = n.getCollectionOfObjectValues<CrossTenantAccessPolicyConfigurationPartner>(createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue); },
    }
}
