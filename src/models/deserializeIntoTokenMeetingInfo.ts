import { deserializeIntoMeetingInfo } from './deserializeIntoMeetingInfo';
import { type TokenMeetingInfo } from './tokenMeetingInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenMeetingInfo(tokenMeetingInfo: TokenMeetingInfo | undefined = {} as TokenMeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingInfo(tokenMeetingInfo),
        "token": n => { tokenMeetingInfo.token = n.getStringValue(); },
    }
}
