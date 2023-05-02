import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {createUserFeedbackFromDiscriminatorValue} from './createUserFeedbackFromDiscriminatorValue';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {ParticipantEndpoint} from './participantEndpoint';
import {serializeUserFeedback} from './serializeUserFeedback';
import {UserFeedback} from './userFeedback';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantEndpoint(participantEndpoint: ParticipantEndpoint | undefined = {} as ParticipantEndpoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEndpoint(participantEndpoint),
        "feedback": n => { participantEndpoint.feedback = n.getObjectValue<UserFeedback>(createUserFeedbackFromDiscriminatorValue); },
        "identity": n => { participantEndpoint.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
