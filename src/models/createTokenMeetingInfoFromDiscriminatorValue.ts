import {TokenMeetingInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenMeetingInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenMeetingInfoImpl();
}
