import {deserializeIntoInvitePostRequestBody} from './deserializeIntoInvitePostRequestBody';
import {InvitePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInvitePostRequestBody;
}
