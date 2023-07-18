import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {UnifiedRoleManagementPolicyRuleTargetOperations} from './unifiedRoleManagementPolicyRuleTargetOperations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyRuleTarget(unifiedRoleManagementPolicyRuleTarget: UnifiedRoleManagementPolicyRuleTarget | undefined = {} as UnifiedRoleManagementPolicyRuleTarget) : Record<string, (node: ParseNode) => void> {
    return {
        "caller": n => { unifiedRoleManagementPolicyRuleTarget.caller = n.getStringValue(); },
        "enforcedSettings": n => { unifiedRoleManagementPolicyRuleTarget.enforcedSettings = n.getCollectionOfPrimitiveValues<string>(); },
        "inheritableSettings": n => { unifiedRoleManagementPolicyRuleTarget.inheritableSettings = n.getCollectionOfPrimitiveValues<string>(); },
        "level": n => { unifiedRoleManagementPolicyRuleTarget.level = n.getStringValue(); },
        "@odata.type": n => { unifiedRoleManagementPolicyRuleTarget.odataType = n.getStringValue(); },
        "operations": n => { unifiedRoleManagementPolicyRuleTarget.operations = n.getCollectionOfEnumValues<UnifiedRoleManagementPolicyRuleTargetOperations>(UnifiedRoleManagementPolicyRuleTargetOperations); },
        "targetObjects": n => { unifiedRoleManagementPolicyRuleTarget.targetObjects = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
    }
}
