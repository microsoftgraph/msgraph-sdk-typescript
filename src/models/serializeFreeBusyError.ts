import {FreeBusyError} from './freeBusyError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFreeBusyError(freeBusyError: FreeBusyError | undefined = {} as FreeBusyError, writer: SerializationWriter) : void {
        writer.writeStringValue("message", freeBusyError.message);
        writer.writeStringValue("@odata.type", freeBusyError.odataType);
        writer.writeStringValue("responseCode", freeBusyError.responseCode);
        writer.writeAdditionalData(freeBusyError.additionalData);
}
