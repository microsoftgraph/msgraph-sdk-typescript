import {deserializeIntoParticipantJoiningNotification} from './deserializeIntoParticipantJoiningNotification';
import {ParticipantJoiningNotification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantJoiningNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantJoiningNotification;
}
