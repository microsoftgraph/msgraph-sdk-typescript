import {createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue} from './createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue';
import {createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue} from './createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue';
import {CrossTenantAccessPolicy} from './crossTenantAccessPolicy';
import {CrossTenantAccessPolicyConfigurationDefault} from './crossTenantAccessPolicyConfigurationDefault';
import {CrossTenantAccessPolicyConfigurationPartner} from './crossTenantAccessPolicyConfigurationPartner';
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
