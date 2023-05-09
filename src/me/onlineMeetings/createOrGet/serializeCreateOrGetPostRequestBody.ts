import {ChatInfo} from '../../../models/chatInfo';
import {MeetingParticipants} from '../../../models/meetingParticipants';
import {serializeChatInfo} from '../../../models/serializeChatInfo';
import {serializeMeetingParticipants} from '../../../models/serializeMeetingParticipants';
import {CreateOrGetPostRequestBody} from './createOrGetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateOrGetPostRequestBody(writer: SerializationWriter, createOrGetPostRequestBody: CreateOrGetPostRequestBody | undefined = {} as CreateOrGetPostRequestBody) : void {
        writer.writeObjectValue<ChatInfo>("chatInfo", createOrGetPostRequestBody.chatInfo, serializeChatInfo);
        writer.writeDateValue("endDateTime", createOrGetPostRequestBody.endDateTime);
        writer.writeStringValue("externalId", createOrGetPostRequestBody.externalId);
        writer.writeObjectValue<MeetingParticipants>("participants", createOrGetPostRequestBody.participants, serializeMeetingParticipants);
        writer.writeDateValue("startDateTime", createOrGetPostRequestBody.startDateTime);
        writer.writeStringValue("subject", createOrGetPostRequestBody.subject);
        writer.writeAdditionalData(createOrGetPostRequestBody.additionalData);
}
