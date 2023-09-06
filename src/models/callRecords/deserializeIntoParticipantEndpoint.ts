import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { type IdentitySet } from '../identitySet';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { createUserFeedbackFromDiscriminatorValue } from './createUserFeedbackFromDiscriminatorValue';
import { deserializeIntoEndpoint } from './deserializeIntoEndpoint';
import { type ParticipantEndpoint } from './participantEndpoint';
import { serializeUserFeedback } from './serializeUserFeedback';
import { type UserFeedback } from './userFeedback';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantEndpoint(participantEndpoint: ParticipantEndpoint | undefined = {} as ParticipantEndpoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEndpoint(participantEndpoint),
        "cpuCoresCount": n => { participantEndpoint.cpuCoresCount = n.getNumberValue(); },
        "cpuName": n => { participantEndpoint.cpuName = n.getStringValue(); },
        "cpuProcessorSpeedInMhz": n => { participantEndpoint.cpuProcessorSpeedInMhz = n.getNumberValue(); },
        "feedback": n => { participantEndpoint.feedback = n.getObjectValue<UserFeedback>(createUserFeedbackFromDiscriminatorValue); },
        "identity": n => { participantEndpoint.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "name": n => { participantEndpoint.name = n.getStringValue(); },
    }
}
