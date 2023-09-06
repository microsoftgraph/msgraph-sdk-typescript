import { type CrossTenantAccessPolicy } from './crossTenantAccessPolicy';
import { type CrossTenantAccessPolicyConfigurationDefault } from './crossTenantAccessPolicyConfigurationDefault';
import { type CrossTenantAccessPolicyConfigurationPartner } from './crossTenantAccessPolicyConfigurationPartner';
import { serializeCrossTenantAccessPolicyConfigurationDefault } from './serializeCrossTenantAccessPolicyConfigurationDefault';
import { serializeCrossTenantAccessPolicyConfigurationPartner } from './serializeCrossTenantAccessPolicyConfigurationPartner';
import { serializePolicyBase } from './serializePolicyBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicy(writer: SerializationWriter, crossTenantAccessPolicy: CrossTenantAccessPolicy | undefined = {} as CrossTenantAccessPolicy) : void {
        serializePolicyBase(writer, crossTenantAccessPolicy)
        writer.writeCollectionOfPrimitiveValues<string>("allowedCloudEndpoints", crossTenantAccessPolicy.allowedCloudEndpoints);
        writer.writeObjectValue<CrossTenantAccessPolicyConfigurationDefault>("default", crossTenantAccessPolicy.defaultEscaped, serializeCrossTenantAccessPolicyConfigurationDefault);
        writer.writeCollectionOfObjectValues<CrossTenantAccessPolicyConfigurationPartner>("partners", crossTenantAccessPolicy.partners, serializeCrossTenantAccessPolicyConfigurationPartner);
}
