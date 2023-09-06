import { deserializeIntoMembersAddedEventMessageDetail } from './deserializeIntoMembersAddedEventMessageDetail';
import { type MembersAddedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMembersAddedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersAddedEventMessageDetail;
}
