import {createDelegatedAdminRelationshipFromDiscriminatorValue} from './createDelegatedAdminRelationshipFromDiscriminatorValue';
import {DelegatedAdminRelationship} from './delegatedAdminRelationship';
import {DelegatedAdminRelationshipCollectionResponse} from './delegatedAdminRelationshipCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationship} from './serializeDelegatedAdminRelationship';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipCollectionResponse(delegatedAdminRelationshipCollectionResponse: DelegatedAdminRelationshipCollectionResponse | undefined = {} as DelegatedAdminRelationshipCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminRelationshipCollectionResponse),
        "value": n => { delegatedAdminRelationshipCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminRelationship>(createDelegatedAdminRelationshipFromDiscriminatorValue); },
    }
}
