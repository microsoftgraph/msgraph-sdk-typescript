import {deserializeIntoAppRoleAssignmentCollectionResponse} from './deserializeIntoAppRoleAssignmentCollectionResponse';
import {AppRoleAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppRoleAssignmentCollectionResponse;
}
