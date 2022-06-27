import {ParticipantJoiningNotificationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantJoiningNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantJoiningNotificationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantJoiningNotificationImpl();
}
