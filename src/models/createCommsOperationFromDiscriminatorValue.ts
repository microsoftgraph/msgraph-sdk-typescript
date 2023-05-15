import {deserializeIntoAddLargeGalleryViewOperation} from './deserializeIntoAddLargeGalleryViewOperation';
import {deserializeIntoCancelMediaProcessingOperation} from './deserializeIntoCancelMediaProcessingOperation';
import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {deserializeIntoInviteParticipantsOperation} from './deserializeIntoInviteParticipantsOperation';
import {deserializeIntoMuteParticipantOperation} from './deserializeIntoMuteParticipantOperation';
import {deserializeIntoPlayPromptOperation} from './deserializeIntoPlayPromptOperation';
import {deserializeIntoRecordOperation} from './deserializeIntoRecordOperation';
import {deserializeIntoStartHoldMusicOperation} from './deserializeIntoStartHoldMusicOperation';
import {deserializeIntoStopHoldMusicOperation} from './deserializeIntoStopHoldMusicOperation';
import {deserializeIntoSubscribeToToneOperation} from './deserializeIntoSubscribeToToneOperation';
import {deserializeIntoUnmuteParticipantOperation} from './deserializeIntoUnmuteParticipantOperation';
import {deserializeIntoUpdateRecordingStatusOperation} from './deserializeIntoUpdateRecordingStatusOperation';
import {AddLargeGalleryViewOperation, CancelMediaProcessingOperation, CommsOperation, InviteParticipantsOperation, MuteParticipantOperation, PlayPromptOperation, RecordOperation, StartHoldMusicOperation, StopHoldMusicOperation, SubscribeToToneOperation, UnmuteParticipantOperation, UpdateRecordingStatusOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.addLargeGalleryViewOperation":
                    return deserializeIntoAddLargeGalleryViewOperation;
                case "#microsoft.graph.cancelMediaProcessingOperation":
                    return deserializeIntoCancelMediaProcessingOperation;
                case "#microsoft.graph.inviteParticipantsOperation":
                    return deserializeIntoInviteParticipantsOperation;
                case "#microsoft.graph.muteParticipantOperation":
                    return deserializeIntoMuteParticipantOperation;
                case "#microsoft.graph.playPromptOperation":
                    return deserializeIntoPlayPromptOperation;
                case "#microsoft.graph.recordOperation":
                    return deserializeIntoRecordOperation;
                case "#microsoft.graph.startHoldMusicOperation":
                    return deserializeIntoStartHoldMusicOperation;
                case "#microsoft.graph.stopHoldMusicOperation":
                    return deserializeIntoStopHoldMusicOperation;
                case "#microsoft.graph.subscribeToToneOperation":
                    return deserializeIntoSubscribeToToneOperation;
                case "#microsoft.graph.unmuteParticipantOperation":
                    return deserializeIntoUnmuteParticipantOperation;
                case "#microsoft.graph.updateRecordingStatusOperation":
                    return deserializeIntoUpdateRecordingStatusOperation;
            }
        }
    }
    return deserializeIntoCommsOperation;
}
