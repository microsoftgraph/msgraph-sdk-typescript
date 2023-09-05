import { createDelegatedAdminAccessAssignmentFromDiscriminatorValue } from './createDelegatedAdminAccessAssignmentFromDiscriminatorValue';
import { type DelegatedAdminAccessAssignment } from './delegatedAdminAccessAssignment';
import { type DelegatedAdminAccessAssignmentCollectionResponse } from './delegatedAdminAccessAssignmentCollectionResponse';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeDelegatedAdminAccessAssignment } from './serializeDelegatedAdminAccessAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminAccessAssignmentCollectionResponse(delegatedAdminAccessAssignmentCollectionResponse: DelegatedAdminAccessAssignmentCollectionResponse | undefined = {} as DelegatedAdminAccessAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminAccessAssignmentCollectionResponse),
        "value": n => { delegatedAdminAccessAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminAccessAssignment>(createDelegatedAdminAccessAssignmentFromDiscriminatorValue); },
    }
}
