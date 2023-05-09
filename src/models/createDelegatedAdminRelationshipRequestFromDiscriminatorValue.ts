import {deserializeIntoDelegatedAdminRelationshipRequest} from './deserializeIntoDelegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipRequest;
}
