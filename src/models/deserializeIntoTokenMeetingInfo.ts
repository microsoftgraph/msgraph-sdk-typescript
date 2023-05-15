import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import {TokenMeetingInfo} from './tokenMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenMeetingInfo(tokenMeetingInfo: TokenMeetingInfo | undefined = {} as TokenMeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingInfo(tokenMeetingInfo),
        "token": n => { tokenMeetingInfo.token = n.getStringValue(); },
    }
}
