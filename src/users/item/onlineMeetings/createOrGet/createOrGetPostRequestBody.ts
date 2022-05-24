import {ChatInfo} from '../../../../models/chatInfo';
import {MeetingParticipants} from '../../../../models/meetingParticipants';

export interface CreateOrGetPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The chatInfo property */
    chatInfo?:ChatInfo | undefined;
    /** The endDateTime property */
    endDateTime?:Date | undefined;
    /** The externalId property */
    externalId?:string | undefined;
    /** The participants property */
    participants?:MeetingParticipants | undefined;
    /** The startDateTime property */
    startDateTime?:Date | undefined;
    /** The subject property */
    subject?:string | undefined;
}
