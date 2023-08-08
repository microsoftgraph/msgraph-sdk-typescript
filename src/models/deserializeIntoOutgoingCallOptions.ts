import {deserializeIntoCallOptions} from './deserializeIntoCallOptions';
import type {OutgoingCallOptions} from './outgoingCallOptions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutgoingCallOptions(outgoingCallOptions: OutgoingCallOptions | undefined = {} as OutgoingCallOptions) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCallOptions(outgoingCallOptions),
    }
}
