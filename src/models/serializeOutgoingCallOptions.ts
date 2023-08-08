import type {OutgoingCallOptions} from './outgoingCallOptions';
import {serializeCallOptions} from './serializeCallOptions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutgoingCallOptions(writer: SerializationWriter, outgoingCallOptions: OutgoingCallOptions | undefined = {} as OutgoingCallOptions) : void {
        serializeCallOptions(writer, outgoingCallOptions)
}
