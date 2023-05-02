import {serializeMeetingInfo} from './serializeMeetingInfo';
import {TokenMeetingInfo} from './tokenMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenMeetingInfo(writer: SerializationWriter, tokenMeetingInfo: TokenMeetingInfo | undefined = {} as TokenMeetingInfo) : void {
        serializeMeetingInfo(writer, tokenMeetingInfo)
        writer.writeStringValue("token", tokenMeetingInfo.token);
}
