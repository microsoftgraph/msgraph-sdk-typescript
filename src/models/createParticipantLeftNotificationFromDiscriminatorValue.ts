import {ParticipantLeftNotificationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantLeftNotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantLeftNotificationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantLeftNotificationImpl();
}
