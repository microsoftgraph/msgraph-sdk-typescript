import { type Entity } from './entity';
import { type MediaStream } from './mediaStream';
import { type OnlineMeetingRestricted } from './onlineMeetingRestricted';
import { type ParticipantInfo } from './participantInfo';
import { type RecordingInfo } from './recordingInfo';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Participant extends Entity, Parsable {
    /**
     * The info property
     */
    info?: ParticipantInfo | undefined;
    /**
     * true if the participant is in lobby.
     */
    isInLobby?: boolean | undefined;
    /**
     * true if the participant is muted (client or server muted).
     */
    isMuted?: boolean | undefined;
    /**
     * The list of media streams.
     */
    mediaStreams?: MediaStream[] | undefined;
    /**
     * A blob of data provided by the participant in the roster.
     */
    metadata?: string | undefined;
    /**
     * Information about whether the participant has recording capability.
     */
    recordingInfo?: RecordingInfo | undefined;
    /**
     * Indicates the reason or reasons media content from this participant is restricted.
     */
    restrictedExperience?: OnlineMeetingRestricted | undefined;
}
