import {createMediaStreamFromDiscriminatorValue} from './createMediaStreamFromDiscriminatorValue';
import {createOnlineMeetingRestrictedFromDiscriminatorValue} from './createOnlineMeetingRestrictedFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from './createParticipantInfoFromDiscriminatorValue';
import {createRecordingInfoFromDiscriminatorValue} from './createRecordingInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MediaStream} from './mediaStream';
import {OnlineMeetingRestricted} from './onlineMeetingRestricted';
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {RecordingInfo} from './recordingInfo';
import {serializeMediaStream} from './serializeMediaStream';
import {serializeOnlineMeetingRestricted} from './serializeOnlineMeetingRestricted';
import {serializeParticipantInfo} from './serializeParticipantInfo';
import {serializeRecordingInfo} from './serializeRecordingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipant(participant: Participant | undefined = {} as Participant) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participant),
        "info": n => { participant.info = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); },
        "isInLobby": n => { participant.isInLobby = n.getBooleanValue(); },
        "isMuted": n => { participant.isMuted = n.getBooleanValue(); },
        "mediaStreams": n => { participant.mediaStreams = n.getCollectionOfObjectValues<MediaStream>(createMediaStreamFromDiscriminatorValue); },
        "metadata": n => { participant.metadata = n.getStringValue(); },
        "recordingInfo": n => { participant.recordingInfo = n.getObjectValue<RecordingInfo>(createRecordingInfoFromDiscriminatorValue); },
        "restrictedExperience": n => { participant.restrictedExperience = n.getObjectValue<OnlineMeetingRestricted>(createOnlineMeetingRestrictedFromDiscriminatorValue); },
    }
}
