import {createDelegatedAdminRelationshipOperationFromDiscriminatorValue} from './createDelegatedAdminRelationshipOperationFromDiscriminatorValue';
import type {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import type {DelegatedAdminRelationshipOperationCollectionResponse} from './delegatedAdminRelationshipOperationCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationshipOperation} from './serializeDelegatedAdminRelationshipOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse(delegatedAdminRelationshipOperationCollectionResponse: DelegatedAdminRelationshipOperationCollectionResponse | undefined = {} as DelegatedAdminRelationshipOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminRelationshipOperationCollectionResponse),
        "value": n => { delegatedAdminRelationshipOperationCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminRelationshipOperation>(createDelegatedAdminRelationshipOperationFromDiscriminatorValue); },
    }
}
