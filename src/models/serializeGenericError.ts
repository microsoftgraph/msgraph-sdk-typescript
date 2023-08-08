import type {GenericError} from './genericError';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGenericError(writer: SerializationWriter, genericError: GenericError | undefined = {} as GenericError) : void {
        writer.writeStringValue("code", genericError.code);
        writer.writeStringValue("message", genericError.message);
        writer.writeStringValue("@odata.type", genericError.odataType);
        writer.writeAdditionalData(genericError.additionalData);
}
