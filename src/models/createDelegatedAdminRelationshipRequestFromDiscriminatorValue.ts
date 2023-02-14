import {DelegatedAdminRelationshipRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminRelationshipRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminRelationshipRequest();
}
