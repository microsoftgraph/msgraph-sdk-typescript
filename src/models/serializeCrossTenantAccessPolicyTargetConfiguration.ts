import { type CrossTenantAccessPolicyTarget } from './crossTenantAccessPolicyTarget';
import { type CrossTenantAccessPolicyTargetConfiguration } from './crossTenantAccessPolicyTargetConfiguration';
import { CrossTenantAccessPolicyTargetConfigurationAccessType } from './crossTenantAccessPolicyTargetConfigurationAccessType';
import { serializeCrossTenantAccessPolicyTarget } from './serializeCrossTenantAccessPolicyTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyTargetConfiguration(writer: SerializationWriter, crossTenantAccessPolicyTargetConfiguration: CrossTenantAccessPolicyTargetConfiguration | undefined = {} as CrossTenantAccessPolicyTargetConfiguration) : void {
        writer.writeEnumValue<CrossTenantAccessPolicyTargetConfigurationAccessType>("accessType", crossTenantAccessPolicyTargetConfiguration.accessType);
        writer.writeStringValue("@odata.type", crossTenantAccessPolicyTargetConfiguration.odataType);
        writer.writeCollectionOfObjectValues<CrossTenantAccessPolicyTarget>("targets", crossTenantAccessPolicyTargetConfiguration.targets, serializeCrossTenantAccessPolicyTarget);
        writer.writeAdditionalData(crossTenantAccessPolicyTargetConfiguration.additionalData);
}
