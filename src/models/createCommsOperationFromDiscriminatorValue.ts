import {AddLargeGalleryViewOperation, CancelMediaProcessingOperation, CommsOperation, InviteParticipantsOperation, MuteParticipantOperation, PlayPromptOperation, RecordOperation, StartHoldMusicOperation, StopHoldMusicOperation, SubscribeToToneOperation, UnmuteParticipantOperation, UpdateRecordingStatusOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommsOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.addLargeGalleryViewOperation":
                    return new AddLargeGalleryViewOperation();
                case "#microsoft.graph.cancelMediaProcessingOperation":
                    return new CancelMediaProcessingOperation();
                case "#microsoft.graph.inviteParticipantsOperation":
                    return new InviteParticipantsOperation();
                case "#microsoft.graph.muteParticipantOperation":
                    return new MuteParticipantOperation();
                case "#microsoft.graph.playPromptOperation":
                    return new PlayPromptOperation();
                case "#microsoft.graph.recordOperation":
                    return new RecordOperation();
                case "#microsoft.graph.startHoldMusicOperation":
                    return new StartHoldMusicOperation();
                case "#microsoft.graph.stopHoldMusicOperation":
                    return new StopHoldMusicOperation();
                case "#microsoft.graph.subscribeToToneOperation":
                    return new SubscribeToToneOperation();
                case "#microsoft.graph.unmuteParticipantOperation":
                    return new UnmuteParticipantOperation();
                case "#microsoft.graph.updateRecordingStatusOperation":
                    return new UpdateRecordingStatusOperation();
            }
        }
    }
    return new CommsOperation();
}
