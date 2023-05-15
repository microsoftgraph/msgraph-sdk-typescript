import {deserializeIntoDelegatedAdminRelationshipCollectionResponse} from './deserializeIntoDelegatedAdminRelationshipCollectionResponse';
import {DelegatedAdminRelationshipCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipCollectionResponse;
}
