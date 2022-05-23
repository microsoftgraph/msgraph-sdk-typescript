import {CheckMemberGroupsResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberGroupsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberGroupsResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberGroupsResponseImpl();
}
