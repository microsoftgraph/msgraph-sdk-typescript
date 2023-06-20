import {CrossTenantAccessPolicyTarget} from './crossTenantAccessPolicyTarget';
import {CrossTenantAccessPolicyTargetType} from './crossTenantAccessPolicyTargetType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyTarget(crossTenantAccessPolicyTarget: CrossTenantAccessPolicyTarget | undefined = {} as CrossTenantAccessPolicyTarget, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", crossTenantAccessPolicyTarget.odataType);
        writer.writeStringValue("target", crossTenantAccessPolicyTarget.target);
        writer.writeEnumValue<CrossTenantAccessPolicyTargetType>("targetType", crossTenantAccessPolicyTarget.targetType);
        writer.writeAdditionalData(crossTenantAccessPolicyTarget.additionalData);
}
