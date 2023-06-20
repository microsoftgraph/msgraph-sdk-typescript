import {ErrorDetails} from './errorDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeErrorDetails(errorDetails: ErrorDetails | undefined = {} as ErrorDetails, writer: SerializationWriter) : void {
        writer.writeStringValue("code", errorDetails.code);
        writer.writeStringValue("message", errorDetails.message);
        writer.writeStringValue("target", errorDetails.target);
        writer.writeAdditionalData(errorDetails.additionalData);
}
