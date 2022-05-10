import {GetMemberGroupsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberGroupsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMemberGroupsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMemberGroupsRequestBodyImpl();
}
