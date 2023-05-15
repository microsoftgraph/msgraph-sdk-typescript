import {deserializeIntoAppRoleAssignment} from './deserializeIntoAppRoleAssignment';
import {AppRoleAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppRoleAssignment;
}
