import { type MediaStream } from './mediaStream';
import { type OnlineMeetingRestricted } from './onlineMeetingRestricted';
import { type Participant } from './participant';
import { type ParticipantInfo } from './participantInfo';
import { type RecordingInfo } from './recordingInfo';
import { serializeEntity } from './serializeEntity';
import { serializeMediaStream } from './serializeMediaStream';
import { serializeOnlineMeetingRestricted } from './serializeOnlineMeetingRestricted';
import { serializeParticipantInfo } from './serializeParticipantInfo';
import { serializeRecordingInfo } from './serializeRecordingInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeParticipant(writer: SerializationWriter, participant: Participant | undefined = {} as Participant) : void {
        serializeEntity(writer, participant)
        writer.writeObjectValue<ParticipantInfo>("info", participant.info, serializeParticipantInfo);
        writer.writeBooleanValue("isInLobby", participant.isInLobby);
        writer.writeBooleanValue("isMuted", participant.isMuted);
        writer.writeCollectionOfObjectValues<MediaStream>("mediaStreams", participant.mediaStreams, serializeMediaStream);
        writer.writeStringValue("metadata", participant.metadata);
        writer.writeObjectValue<RecordingInfo>("recordingInfo", participant.recordingInfo, serializeRecordingInfo);
        writer.writeObjectValue<OnlineMeetingRestricted>("restrictedExperience", participant.restrictedExperience, serializeOnlineMeetingRestricted);
}
