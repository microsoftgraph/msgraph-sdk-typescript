import { deserializeIntoMembersLeftEventMessageDetail } from './deserializeIntoMembersLeftEventMessageDetail';
import { type MembersLeftEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMembersLeftEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersLeftEventMessageDetail;
}
