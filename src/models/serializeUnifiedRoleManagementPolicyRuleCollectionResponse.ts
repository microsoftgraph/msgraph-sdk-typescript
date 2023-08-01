import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import type {UnifiedRoleManagementPolicyRuleCollectionResponse} from './unifiedRoleManagementPolicyRuleCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyRuleCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyRuleCollectionResponse: UnifiedRoleManagementPolicyRuleCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyRuleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyRuleCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRule>("value", unifiedRoleManagementPolicyRuleCollectionResponse.value, serializeUnifiedRoleManagementPolicyRule);
}
