import {AppRoleAssignmentCollectionResponse} from './appRoleAssignmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppRoleAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppRoleAssignmentCollectionResponse();
}
