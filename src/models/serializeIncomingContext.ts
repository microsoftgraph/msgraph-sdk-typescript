import {IdentitySet} from './identitySet';
import {IncomingContext} from './incomingContext';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncomingContext(writer: SerializationWriter, incomingContext: IncomingContext | undefined = {} as IncomingContext) : void {
        writer.writeStringValue("observedParticipantId", incomingContext.observedParticipantId);
        writer.writeStringValue("@odata.type", incomingContext.odataType);
        writer.writeObjectValue<IdentitySet>("onBehalfOf", incomingContext.onBehalfOf, serializeIdentitySet);
        writer.writeStringValue("sourceParticipantId", incomingContext.sourceParticipantId);
        writer.writeObjectValue<IdentitySet>("transferor", incomingContext.transferor, serializeIdentitySet);
        writer.writeAdditionalData(incomingContext.additionalData);
}
