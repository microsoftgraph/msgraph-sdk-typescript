import {deserializeIntoMembersAddedEventMessageDetail} from './deserializeIntoMembersAddedEventMessageDetail';
import {MembersAddedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersAddedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersAddedEventMessageDetail;
}
