import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {Initiator} from './initiator';
import {InitiatorType} from './initiatorType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInitiator(initiator: Initiator | undefined = {} as Initiator) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(initiator),
        "initiatorType": n => { initiator.initiatorType = n.getEnumValue<InitiatorType>(InitiatorType); },
    }
}
