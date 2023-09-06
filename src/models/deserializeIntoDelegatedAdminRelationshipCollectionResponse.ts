import { createDelegatedAdminRelationshipFromDiscriminatorValue } from './createDelegatedAdminRelationshipFromDiscriminatorValue';
import { type DelegatedAdminRelationship } from './delegatedAdminRelationship';
import { type DelegatedAdminRelationshipCollectionResponse } from './delegatedAdminRelationshipCollectionResponse';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeDelegatedAdminRelationship } from './serializeDelegatedAdminRelationship';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipCollectionResponse(delegatedAdminRelationshipCollectionResponse: DelegatedAdminRelationshipCollectionResponse | undefined = {} as DelegatedAdminRelationshipCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminRelationshipCollectionResponse),
        "value": n => { delegatedAdminRelationshipCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminRelationship>(createDelegatedAdminRelationshipFromDiscriminatorValue); },
    }
}
