import type {ConvertIdResult} from './convertIdResult';
import type {GenericError} from './genericError';
import {serializeGenericError} from './serializeGenericError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConvertIdResult(writer: SerializationWriter, convertIdResult: ConvertIdResult | undefined = {} as ConvertIdResult) : void {
        writer.writeObjectValue<GenericError>("errorDetails", convertIdResult.errorDetails, serializeGenericError);
        writer.writeStringValue("@odata.type", convertIdResult.odataType);
        writer.writeStringValue("sourceId", convertIdResult.sourceId);
        writer.writeStringValue("targetId", convertIdResult.targetId);
        writer.writeAdditionalData(convertIdResult.additionalData);
}
