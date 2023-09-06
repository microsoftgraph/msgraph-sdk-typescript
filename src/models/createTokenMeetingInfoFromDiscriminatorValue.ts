import { deserializeIntoTokenMeetingInfo } from './deserializeIntoTokenMeetingInfo';
import { type TokenMeetingInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTokenMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenMeetingInfo;
}
