import { type IncomingCallOptions } from './incomingCallOptions';
import { serializeCallOptions } from './serializeCallOptions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIncomingCallOptions(writer: SerializationWriter, incomingCallOptions: IncomingCallOptions | undefined = {} as IncomingCallOptions) : void {
        serializeCallOptions(writer, incomingCallOptions)
}
