import { type DirectoryObject } from './directoryObject';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { type UnifiedRoleManagementPolicyRuleTarget } from './unifiedRoleManagementPolicyRuleTarget';
import { UnifiedRoleManagementPolicyRuleTargetOperations } from './unifiedRoleManagementPolicyRuleTargetOperations';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyRuleTarget(writer: SerializationWriter, unifiedRoleManagementPolicyRuleTarget: UnifiedRoleManagementPolicyRuleTarget | undefined = {} as UnifiedRoleManagementPolicyRuleTarget) : void {
        writer.writeStringValue("caller", unifiedRoleManagementPolicyRuleTarget.caller);
        writer.writeCollectionOfPrimitiveValues<string>("enforcedSettings", unifiedRoleManagementPolicyRuleTarget.enforcedSettings);
        writer.writeCollectionOfPrimitiveValues<string>("inheritableSettings", unifiedRoleManagementPolicyRuleTarget.inheritableSettings);
        writer.writeStringValue("level", unifiedRoleManagementPolicyRuleTarget.level);
        writer.writeStringValue("@odata.type", unifiedRoleManagementPolicyRuleTarget.odataType);
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleTargetOperations>("operations", unifiedRoleManagementPolicyRuleTarget.operations, object);
        writer.writeCollectionOfObjectValues<DirectoryObject>("targetObjects", unifiedRoleManagementPolicyRuleTarget.targetObjects, serializeDirectoryObject);
        writer.writeAdditionalData(unifiedRoleManagementPolicyRuleTarget.additionalData);
}
