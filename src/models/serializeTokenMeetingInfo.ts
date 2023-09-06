import { serializeMeetingInfo } from './serializeMeetingInfo';
import { type TokenMeetingInfo } from './tokenMeetingInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTokenMeetingInfo(writer: SerializationWriter, tokenMeetingInfo: TokenMeetingInfo | undefined = {} as TokenMeetingInfo) : void {
        serializeMeetingInfo(writer, tokenMeetingInfo)
        writer.writeStringValue("token", tokenMeetingInfo.token);
}
