import {deserializeIntoMembersDeletedEventMessageDetail} from './deserializeIntoMembersDeletedEventMessageDetail';
import {MembersDeletedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersDeletedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersDeletedEventMessageDetail;
}
