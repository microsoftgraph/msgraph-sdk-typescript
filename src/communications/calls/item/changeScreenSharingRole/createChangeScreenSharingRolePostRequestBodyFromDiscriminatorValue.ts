import {ChangeScreenSharingRolePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeScreenSharingRolePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeScreenSharingRolePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeScreenSharingRolePostRequestBody();
}
