import {deserializeIntoCheckMemberGroupsPostRequestBody} from './deserializeIntoCheckMemberGroupsPostRequestBody';
import {CheckMemberGroupsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberGroupsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckMemberGroupsPostRequestBody;
}
