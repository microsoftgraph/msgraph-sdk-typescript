import {AppRoleAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppRoleAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppRoleAssignmentCollectionResponseImpl();
}
