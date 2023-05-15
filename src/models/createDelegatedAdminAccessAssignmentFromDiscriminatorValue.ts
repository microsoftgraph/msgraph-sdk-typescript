import {deserializeIntoDelegatedAdminAccessAssignment} from './deserializeIntoDelegatedAdminAccessAssignment';
import {DelegatedAdminAccessAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminAccessAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminAccessAssignment;
}
