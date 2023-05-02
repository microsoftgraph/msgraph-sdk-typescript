import {deserializeIntoDelegatedAdminRelationshipOperation} from './deserializeIntoDelegatedAdminRelationshipOperation';
import {DelegatedAdminRelationshipOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationshipOperation;
}
