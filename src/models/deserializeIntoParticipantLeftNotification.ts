import {Call} from './call';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ParticipantLeftNotification} from './participantLeftNotification';
import {serializeCall} from './serializeCall';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantLeftNotification(participantLeftNotification: ParticipantLeftNotification | undefined = {} as ParticipantLeftNotification) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participantLeftNotification),
        "call": n => { participantLeftNotification.call = n.getObjectValue<Call>(createCallFromDiscriminatorValue); },
        "participantId": n => { participantLeftNotification.participantId = n.getStringValue(); },
    }
}
