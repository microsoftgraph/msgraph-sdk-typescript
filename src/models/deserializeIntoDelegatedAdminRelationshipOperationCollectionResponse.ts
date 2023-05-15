import {createDelegatedAdminRelationshipOperationFromDiscriminatorValue} from './createDelegatedAdminRelationshipOperationFromDiscriminatorValue';
import {DelegatedAdminRelationshipOperation} from './delegatedAdminRelationshipOperation';
import {DelegatedAdminRelationshipOperationCollectionResponse} from './delegatedAdminRelationshipOperationCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDelegatedAdminRelationshipOperation} from './serializeDelegatedAdminRelationshipOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse(delegatedAdminRelationshipOperationCollectionResponse: DelegatedAdminRelationshipOperationCollectionResponse | undefined = {} as DelegatedAdminRelationshipOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(delegatedAdminRelationshipOperationCollectionResponse),
        "value": n => { delegatedAdminRelationshipOperationCollectionResponse.value = n.getCollectionOfObjectValues<DelegatedAdminRelationshipOperation>(createDelegatedAdminRelationshipOperationFromDiscriminatorValue); },
    }
}
