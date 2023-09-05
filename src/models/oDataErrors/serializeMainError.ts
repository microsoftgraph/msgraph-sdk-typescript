import { type ErrorDetails } from './errorDetails';
import { type InnerError } from './innerError';
import { type MainError } from './mainError';
import { serializeErrorDetails } from './serializeErrorDetails';
import { serializeInnerError } from './serializeInnerError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMainError(writer: SerializationWriter, mainError: MainError | undefined = {} as MainError) : void {
        writer.writeStringValue("code", mainError.code);
        writer.writeCollectionOfObjectValues<ErrorDetails>("details", mainError.details, serializeErrorDetails);
        writer.writeObjectValue<InnerError>("innerError", mainError.innerError, serializeInnerError);
        writer.writeStringValue("message", mainError.message);
        writer.writeStringValue("target", mainError.target);
        writer.writeAdditionalData(mainError.additionalData);
}
