import { deserializeIntoMembersDeletedEventMessageDetail } from './deserializeIntoMembersDeletedEventMessageDetail';
import { type MembersDeletedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMembersDeletedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersDeletedEventMessageDetail;
}
