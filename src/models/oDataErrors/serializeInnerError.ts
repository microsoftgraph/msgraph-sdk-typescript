import {InnerError} from './innerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInnerError(writer: SerializationWriter, innerError: InnerError | undefined = {} as InnerError) : void {
        writer.writeStringValue("client-request-id", innerError.clientRequestId);
        writer.writeDateValue("date", innerError.date);
        writer.writeStringValue("@odata.type", innerError.odataType);
        writer.writeStringValue("request-id", innerError.requestId);
        writer.writeAdditionalData(innerError.additionalData);
}
