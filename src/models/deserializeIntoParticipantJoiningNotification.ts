import { type Call } from './call';
import { createCallFromDiscriminatorValue } from './createCallFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ParticipantJoiningNotification } from './participantJoiningNotification';
import { serializeCall } from './serializeCall';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantJoiningNotification(participantJoiningNotification: ParticipantJoiningNotification | undefined = {} as ParticipantJoiningNotification) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participantJoiningNotification),
        "call": n => { participantJoiningNotification.call = n.getObjectValue<Call>(createCallFromDiscriminatorValue); },
    }
}
