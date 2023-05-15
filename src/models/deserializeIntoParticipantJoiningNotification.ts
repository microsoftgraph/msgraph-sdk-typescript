import {Call} from './call';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ParticipantJoiningNotification} from './participantJoiningNotification';
import {serializeCall} from './serializeCall';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantJoiningNotification(participantJoiningNotification: ParticipantJoiningNotification | undefined = {} as ParticipantJoiningNotification) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participantJoiningNotification),
        "call": n => { participantJoiningNotification.call = n.getObjectValue<Call>(createCallFromDiscriminatorValue); },
    }
}
