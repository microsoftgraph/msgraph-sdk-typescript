import {GetMemberGroupsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberGroupsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMemberGroupsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMemberGroupsPostRequestBodyImpl();
}
