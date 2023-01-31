import {DelegatedAdminRelationshipRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminRelationshipRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminRelationshipRequestCollectionResponse();
}
