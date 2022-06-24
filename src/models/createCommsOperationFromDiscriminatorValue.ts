import {CancelMediaProcessingOperationImpl, CommsOperationImpl, InviteParticipantsOperationImpl, MuteParticipantOperationImpl, PlayPromptOperationImpl, RecordOperationImpl, StartHoldMusicOperationImpl, StopHoldMusicOperationImpl, SubscribeToToneOperationImpl, UnmuteParticipantOperationImpl, UpdateRecordingStatusOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommsOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.cancelMediaProcessingOperation":
                    return new CancelMediaProcessingOperationImpl();
                case "#microsoft.graph.inviteParticipantsOperation":
                    return new InviteParticipantsOperationImpl();
                case "#microsoft.graph.muteParticipantOperation":
                    return new MuteParticipantOperationImpl();
                case "#microsoft.graph.playPromptOperation":
                    return new PlayPromptOperationImpl();
                case "#microsoft.graph.recordOperation":
                    return new RecordOperationImpl();
                case "#microsoft.graph.startHoldMusicOperation":
                    return new StartHoldMusicOperationImpl();
                case "#microsoft.graph.stopHoldMusicOperation":
                    return new StopHoldMusicOperationImpl();
                case "#microsoft.graph.subscribeToToneOperation":
                    return new SubscribeToToneOperationImpl();
                case "#microsoft.graph.unmuteParticipantOperation":
                    return new UnmuteParticipantOperationImpl();
                case "#microsoft.graph.updateRecordingStatusOperation":
                    return new UpdateRecordingStatusOperationImpl();
            }
        }
    }
    return new CommsOperationImpl();
}
