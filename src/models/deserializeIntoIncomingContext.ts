import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IncomingContext} from './incomingContext';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIncomingContext(incomingContext: IncomingContext | undefined = {} as IncomingContext) : Record<string, (node: ParseNode) => void> {
    return {
        "observedParticipantId": n => { incomingContext.observedParticipantId = n.getStringValue(); },
        "@odata.type": n => { incomingContext.odataType = n.getStringValue(); },
        "onBehalfOf": n => { incomingContext.onBehalfOf = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "sourceParticipantId": n => { incomingContext.sourceParticipantId = n.getStringValue(); },
        "transferor": n => { incomingContext.transferor = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
