import { type CrossTenantAccessPolicyTarget } from './crossTenantAccessPolicyTarget';
import { CrossTenantAccessPolicyTargetType } from './crossTenantAccessPolicyTargetType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyTarget(writer: SerializationWriter, crossTenantAccessPolicyTarget: CrossTenantAccessPolicyTarget | undefined = {} as CrossTenantAccessPolicyTarget) : void {
        writer.writeStringValue("@odata.type", crossTenantAccessPolicyTarget.odataType);
        writer.writeStringValue("target", crossTenantAccessPolicyTarget.target);
        writer.writeEnumValue<CrossTenantAccessPolicyTargetType>("targetType", crossTenantAccessPolicyTarget.targetType);
        writer.writeAdditionalData(crossTenantAccessPolicyTarget.additionalData);
}
