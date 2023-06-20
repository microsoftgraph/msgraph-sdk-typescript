import {GenericError} from './genericError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGenericError(genericError: GenericError | undefined = {} as GenericError, writer: SerializationWriter) : void {
        writer.writeStringValue("code", genericError.code);
        writer.writeStringValue("message", genericError.message);
        writer.writeStringValue("@odata.type", genericError.odataType);
        writer.writeAdditionalData(genericError.additionalData);
}
