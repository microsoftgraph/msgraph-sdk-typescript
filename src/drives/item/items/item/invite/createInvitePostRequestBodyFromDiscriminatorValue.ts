import {InvitePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitePostRequestBody();
}
