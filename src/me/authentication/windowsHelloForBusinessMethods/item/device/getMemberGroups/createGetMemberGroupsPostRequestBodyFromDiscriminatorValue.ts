import {GetMemberGroupsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberGroupsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMemberGroupsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMemberGroupsPostRequestBody();
}
