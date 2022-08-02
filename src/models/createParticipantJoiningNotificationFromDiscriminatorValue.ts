import {ParticipantJoiningNotification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantJoiningNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantJoiningNotification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantJoiningNotification();
}
