import {createUnifiedRoleAssignmentFromDiscriminatorValue} from './createUnifiedRoleAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignment} from './serializeUnifiedRoleAssignment';
import type {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import type {UnifiedRoleAssignmentCollectionResponse} from './unifiedRoleAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleAssignmentCollectionResponse(unifiedRoleAssignmentCollectionResponse: UnifiedRoleAssignmentCollectionResponse | undefined = {} as UnifiedRoleAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRoleAssignmentCollectionResponse),
        "value": n => { unifiedRoleAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRoleAssignment>(createUnifiedRoleAssignmentFromDiscriminatorValue); },
    }
}
