import {OnlineMeeting} from './onlineMeeting';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnlineMeetingFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnlineMeeting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnlineMeeting();
}
