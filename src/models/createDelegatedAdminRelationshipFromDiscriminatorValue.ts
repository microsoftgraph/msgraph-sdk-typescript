import {deserializeIntoDelegatedAdminRelationship} from './deserializeIntoDelegatedAdminRelationship';
import {DelegatedAdminRelationship} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminRelationshipFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminRelationship;
}
