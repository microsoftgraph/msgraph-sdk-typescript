import { deserializeIntoOnlineMeeting } from './deserializeIntoOnlineMeeting';
import { type OnlineMeeting } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnlineMeetingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnlineMeeting;
}
