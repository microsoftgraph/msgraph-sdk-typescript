import {TokenMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenMeetingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenMeetingInfo();
}
