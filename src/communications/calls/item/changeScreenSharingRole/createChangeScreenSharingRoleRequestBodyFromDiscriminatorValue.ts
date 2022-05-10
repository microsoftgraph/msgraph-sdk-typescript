import {ChangeScreenSharingRoleRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeScreenSharingRoleRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeScreenSharingRoleRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeScreenSharingRoleRequestBodyImpl();
}
