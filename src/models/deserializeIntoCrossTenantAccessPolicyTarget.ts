import {CrossTenantAccessPolicyTarget} from './crossTenantAccessPolicyTarget';
import {CrossTenantAccessPolicyTargetType} from './crossTenantAccessPolicyTargetType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyTarget(crossTenantAccessPolicyTarget: CrossTenantAccessPolicyTarget | undefined = {} as CrossTenantAccessPolicyTarget) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { crossTenantAccessPolicyTarget.odataType = n.getStringValue(); },
        "target": n => { crossTenantAccessPolicyTarget.target = n.getStringValue(); },
        "targetType": n => { crossTenantAccessPolicyTarget.targetType = n.getEnumValue<CrossTenantAccessPolicyTargetType>(CrossTenantAccessPolicyTargetType); },
    }
}
