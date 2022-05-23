import {CheckMemberGroupsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberGroupsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberGroupsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberGroupsPostRequestBodyImpl();
}
