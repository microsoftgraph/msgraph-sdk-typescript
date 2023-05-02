import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyCollectionResponse} from './unifiedRoleManagementPolicyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyCollectionResponse: UnifiedRoleManagementPolicyCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicy>("value", unifiedRoleManagementPolicyCollectionResponse.value, serializeUnifiedRoleManagementPolicy);
}
