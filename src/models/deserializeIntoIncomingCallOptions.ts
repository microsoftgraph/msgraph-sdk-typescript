import {deserializeIntoCallOptions} from './deserializeIntoCallOptions';
import {IncomingCallOptions} from './incomingCallOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIncomingCallOptions(incomingCallOptions: IncomingCallOptions | undefined = {} as IncomingCallOptions) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCallOptions(incomingCallOptions),
    }
}
