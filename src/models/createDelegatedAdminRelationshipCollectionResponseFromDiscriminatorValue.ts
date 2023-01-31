import {DelegatedAdminRelationshipCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminRelationshipCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminRelationshipCollectionResponse();
}
