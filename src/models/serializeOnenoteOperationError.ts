import { type OnenoteOperationError } from './onenoteOperationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnenoteOperationError(writer: SerializationWriter, onenoteOperationError: OnenoteOperationError | undefined = {} as OnenoteOperationError) : void {
        writer.writeStringValue("code", onenoteOperationError.code);
        writer.writeStringValue("message", onenoteOperationError.message);
        writer.writeStringValue("@odata.type", onenoteOperationError.odataType);
        writer.writeAdditionalData(onenoteOperationError.additionalData);
}
