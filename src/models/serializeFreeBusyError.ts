import { type FreeBusyError } from './freeBusyError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFreeBusyError(writer: SerializationWriter, freeBusyError: FreeBusyError | undefined = {} as FreeBusyError) : void {
        writer.writeStringValue("message", freeBusyError.message);
        writer.writeStringValue("@odata.type", freeBusyError.odataType);
        writer.writeStringValue("responseCode", freeBusyError.responseCode);
        writer.writeAdditionalData(freeBusyError.additionalData);
}
