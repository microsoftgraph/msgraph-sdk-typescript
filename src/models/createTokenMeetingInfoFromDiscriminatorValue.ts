import {deserializeIntoTokenMeetingInfo} from './deserializeIntoTokenMeetingInfo';
import {TokenMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenMeetingInfo;
}
