import { deserializeIntoParticipantJoiningNotification } from './deserializeIntoParticipantJoiningNotification';
import { type ParticipantJoiningNotification } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParticipantJoiningNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantJoiningNotification;
}
