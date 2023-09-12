import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleManagementPolicy } from './serializeUnifiedRoleManagementPolicy';
import { type UnifiedRoleManagementPolicy } from './unifiedRoleManagementPolicy';
import { type UnifiedRoleManagementPolicyCollectionResponse } from './unifiedRoleManagementPolicyCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyCollectionResponse: UnifiedRoleManagementPolicyCollectionResponse | undefined = {} as UnifiedRoleManagementPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicy>("value", unifiedRoleManagementPolicyCollectionResponse.value, serializeUnifiedRoleManagementPolicy);
}
