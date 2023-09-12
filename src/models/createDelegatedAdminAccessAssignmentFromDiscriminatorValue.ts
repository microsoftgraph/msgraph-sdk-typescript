import { deserializeIntoDelegatedAdminAccessAssignment } from './deserializeIntoDelegatedAdminAccessAssignment';
import { type DelegatedAdminAccessAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminAccessAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminAccessAssignment;
}
