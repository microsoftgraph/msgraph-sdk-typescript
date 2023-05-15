import {deserializeIntoParticipantLeftNotification} from './deserializeIntoParticipantLeftNotification';
import {ParticipantLeftNotification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantLeftNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParticipantLeftNotification;
}
