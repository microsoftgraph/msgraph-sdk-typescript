import {deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse} from './deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse';
import {DelegatedAdminRelationshipOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipOperationCollectionResponse;
}
