import {ChangeScreenSharingRolePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeScreenSharingRolePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeScreenSharingRolePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeScreenSharingRolePostRequestBodyImpl();
}
