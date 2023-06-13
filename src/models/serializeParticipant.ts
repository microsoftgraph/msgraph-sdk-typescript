import {MediaStream} from './mediaStream';
import {OnlineMeetingRestricted} from './onlineMeetingRestricted';
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {RecordingInfo} from './recordingInfo';
import {serializeEntity} from './serializeEntity';
import {serializeMediaStream} from './serializeMediaStream';
import {serializeOnlineMeetingRestricted} from './serializeOnlineMeetingRestricted';
import {serializeParticipantInfo} from './serializeParticipantInfo';
import {serializeRecordingInfo} from './serializeRecordingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
