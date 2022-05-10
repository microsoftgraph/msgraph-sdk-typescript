import {CheckMemberGroupsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberGroupsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberGroupsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberGroupsRequestBodyImpl();
}
