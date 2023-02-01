import {DelegatedAdminRelationshipOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminRelationshipOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminRelationshipOperation();
}
