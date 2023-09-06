import { type Call } from './call';
import { createCallFromDiscriminatorValue } from './createCallFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ParticipantLeftNotification } from './participantLeftNotification';
import { serializeCall } from './serializeCall';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantLeftNotification(participantLeftNotification: ParticipantLeftNotification | undefined = {} as ParticipantLeftNotification) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participantLeftNotification),
        "call": n => { participantLeftNotification.call = n.getObjectValue<Call>(createCallFromDiscriminatorValue); },
        "participantId": n => { participantLeftNotification.participantId = n.getStringValue(); },
    }
}
