import {IncomingCallOptions} from './incomingCallOptions';
import {serializeCallOptions} from './serializeCallOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncomingCallOptions(writer: SerializationWriter, incomingCallOptions: IncomingCallOptions | undefined = {} as IncomingCallOptions) : void {
        serializeCallOptions(writer, incomingCallOptions)
}
