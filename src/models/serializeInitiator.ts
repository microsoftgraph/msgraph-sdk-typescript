import {Initiator} from './initiator';
import {InitiatorType} from './initiatorType';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInitiator(writer: SerializationWriter, initiator: Initiator | undefined = {} as Initiator) : void {
        serializeIdentity(writer, initiator)
        writer.writeEnumValue<InitiatorType>("initiatorType", initiator.initiatorType);
}
