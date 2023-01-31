import {DelegatedAdminRelationship} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) : DelegatedAdminRelationship {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DelegatedAdminRelationship();
}
