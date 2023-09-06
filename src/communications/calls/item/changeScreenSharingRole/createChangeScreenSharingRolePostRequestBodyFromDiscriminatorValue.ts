import { deserializeIntoChangeScreenSharingRolePostRequestBody } from './deserializeIntoChangeScreenSharingRolePostRequestBody';
import { type ChangeScreenSharingRolePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChangeScreenSharingRolePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChangeScreenSharingRolePostRequestBody;
}
