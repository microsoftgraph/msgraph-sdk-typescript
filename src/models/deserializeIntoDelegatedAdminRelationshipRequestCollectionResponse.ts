import { createDelegatedAdminRelationshipRequestFromDiscriminatorValue } from './createDelegatedAdminRelationshipRequestFromDiscriminatorValue';
import { type DelegatedAdminRelationshipRequest } from './delegatedAdminRelationshipRequest';
import { type DelegatedAdminRelationshipRequestCollectionResponse } from './delegatedAdminRelationshipRequestCollectionResponse';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeDelegatedAdminRelationshipRequest } from './serializeDelegatedAdminRelationshipRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipRequestCollectionResponse(delegatedAdminRelationshipRequestCollectionResponse: DelegatedAdminRelationshipRequestCollectionResponse | undefined = {} as DelegatedAdminRelationshipRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminRelationshipRequestCollectionResponse),
        "value": n => { delegatedAdminRelationshipRequestCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminRelationshipRequest>(createDelegatedAdminRelationshipRequestFromDiscriminatorValue); },
    }
}
