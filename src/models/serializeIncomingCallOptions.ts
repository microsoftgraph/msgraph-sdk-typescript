import {IncomingCallOptions} from './incomingCallOptions';
import {serializeCallOptions} from './serializeCallOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncomingCallOptions(incomingCallOptions: IncomingCallOptions | undefined = {} as IncomingCallOptions, writer: SerializationWriter) : void {
        serializeCallOptions(writer, incomingCallOptions)
}
