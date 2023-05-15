import {ChatInfo} from '../../../models/chatInfo';
import {createChatInfoFromDiscriminatorValue} from '../../../models/createChatInfoFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from '../../../models/createMeetingParticipantsFromDiscriminatorValue';
import {MeetingParticipants} from '../../../models/meetingParticipants';
import {serializeChatInfo} from '../../../models/serializeChatInfo';
import {serializeMeetingParticipants} from '../../../models/serializeMeetingParticipants';
import {CreateOrGetPostRequestBody} from './createOrGetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateOrGetPostRequestBody(createOrGetPostRequestBody: CreateOrGetPostRequestBody | undefined = {} as CreateOrGetPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "chatInfo": n => { createOrGetPostRequestBody.chatInfo = n.getObjectValue<ChatInfo>(createChatInfoFromDiscriminatorValue); },
        "endDateTime": n => { createOrGetPostRequestBody.endDateTime = n.getDateValue(); },
        "externalId": n => { createOrGetPostRequestBody.externalId = n.getStringValue(); },
        "participants": n => { createOrGetPostRequestBody.participants = n.getObjectValue<MeetingParticipants>(createMeetingParticipantsFromDiscriminatorValue); },
        "startDateTime": n => { createOrGetPostRequestBody.startDateTime = n.getDateValue(); },
        "subject": n => { createOrGetPostRequestBody.subject = n.getStringValue(); },
    }
}
