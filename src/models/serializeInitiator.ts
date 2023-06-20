import {Initiator} from './initiator';
import {InitiatorType} from './initiatorType';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInitiator(initiator: Initiator | undefined = {} as Initiator, writer: SerializationWriter) : void {
        serializeIdentity(writer, initiator)
        writer.writeEnumValue<InitiatorType>("initiatorType", initiator.initiatorType);
}
