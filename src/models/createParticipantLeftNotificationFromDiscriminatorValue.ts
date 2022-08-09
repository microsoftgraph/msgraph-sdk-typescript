import {ParticipantLeftNotification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantLeftNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantLeftNotification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantLeftNotification();
}
