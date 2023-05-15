import {deserializeIntoGetMemberGroupsPostRequestBody} from './deserializeIntoGetMemberGroupsPostRequestBody';
import {GetMemberGroupsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberGroupsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMemberGroupsPostRequestBody;
}
