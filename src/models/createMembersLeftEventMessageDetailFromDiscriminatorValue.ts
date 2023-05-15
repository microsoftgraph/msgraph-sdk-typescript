import {deserializeIntoMembersLeftEventMessageDetail} from './deserializeIntoMembersLeftEventMessageDetail';
import {MembersLeftEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersLeftEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembersLeftEventMessageDetail;
}
