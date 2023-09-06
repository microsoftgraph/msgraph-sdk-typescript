import { type ErrorDetails } from './errorDetails';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeErrorDetails(writer: SerializationWriter, errorDetails: ErrorDetails | undefined = {} as ErrorDetails) : void {
        writer.writeStringValue("code", errorDetails.code);
        writer.writeStringValue("message", errorDetails.message);
        writer.writeStringValue("target", errorDetails.target);
        writer.writeAdditionalData(errorDetails.additionalData);
}
