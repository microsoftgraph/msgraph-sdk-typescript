import {deserializeIntoChangeScreenSharingRolePostRequestBody} from './deserializeIntoChangeScreenSharingRolePostRequestBody';
import {ChangeScreenSharingRolePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeScreenSharingRolePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChangeScreenSharingRolePostRequestBody;
}
