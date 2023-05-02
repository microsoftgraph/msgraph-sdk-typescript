import {createDelegatedAdminRelationshipRequestFromDiscriminatorValue} from './createDelegatedAdminRelationshipRequestFromDiscriminatorValue';
import {DelegatedAdminRelationshipRequest} from './delegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipRequestCollectionResponse} from './delegatedAdminRelationshipRequestCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationshipRequest} from './serializeDelegatedAdminRelationshipRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipRequestCollectionResponse(delegatedAdminRelationshipRequestCollectionResponse: DelegatedAdminRelationshipRequestCollectionResponse | undefined = {} as DelegatedAdminRelationshipRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminRelationshipRequestCollectionResponse),
        "value": n => { delegatedAdminRelationshipRequestCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminRelationshipRequest>(createDelegatedAdminRelationshipRequestFromDiscriminatorValue); },
    }
}
