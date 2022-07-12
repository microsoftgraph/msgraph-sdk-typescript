import {MembersAddedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersAddedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembersAddedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembersAddedEventMessageDetail();
}
