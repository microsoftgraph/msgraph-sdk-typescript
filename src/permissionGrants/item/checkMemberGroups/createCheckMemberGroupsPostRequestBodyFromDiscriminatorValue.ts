import { deserializeIntoCheckMemberGroupsPostRequestBody } from './deserializeIntoCheckMemberGroupsPostRequestBody';
import { type CheckMemberGroupsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCheckMemberGroupsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckMemberGroupsPostRequestBody;
}
