import { type OperationError } from './operationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOperationError(writer: SerializationWriter, operationError: OperationError | undefined = {} as OperationError) : void {
        writer.writeStringValue("code", operationError.code);
        writer.writeStringValue("message", operationError.message);
        writer.writeStringValue("@odata.type", operationError.odataType);
        writer.writeAdditionalData(operationError.additionalData);
}
