import { deserializeIntoCallOptions } from './deserializeIntoCallOptions';
import { type IncomingCallOptions } from './incomingCallOptions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIncomingCallOptions(incomingCallOptions: IncomingCallOptions | undefined = {} as IncomingCallOptions) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCallOptions(incomingCallOptions),
    }
}
