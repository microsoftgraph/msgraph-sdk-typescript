import {OutgoingCallOptions} from './outgoingCallOptions';
import {serializeCallOptions} from './serializeCallOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutgoingCallOptions(writer: SerializationWriter, outgoingCallOptions: OutgoingCallOptions | undefined = {} as OutgoingCallOptions) : void {
        serializeCallOptions(writer, outgoingCallOptions)
}
