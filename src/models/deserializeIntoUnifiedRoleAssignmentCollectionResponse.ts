import { createUnifiedRoleAssignmentFromDiscriminatorValue } from './createUnifiedRoleAssignmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleAssignment } from './serializeUnifiedRoleAssignment';
import { type UnifiedRoleAssignment } from './unifiedRoleAssignment';
import { type UnifiedRoleAssignmentCollectionResponse } from './unifiedRoleAssignmentCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentCollectionResponse(unifiedRoleAssignmentCollectionResponse: UnifiedRoleAssignmentCollectionResponse | undefined = {} as UnifiedRoleAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentCollectionResponse),
        "value": n => { unifiedRoleAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignment>(createUnifiedRoleAssignmentFromDiscriminatorValue); },
    }
}
