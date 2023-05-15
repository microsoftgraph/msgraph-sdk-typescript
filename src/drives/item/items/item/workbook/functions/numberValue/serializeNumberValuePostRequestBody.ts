import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {NumberValuePostRequestBody} from './numberValuePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNumberValuePostRequestBody(writer: SerializationWriter, numberValuePostRequestBody: NumberValuePostRequestBody | undefined = {} as NumberValuePostRequestBody) : void {
        writer.writeObjectValue<Json>("decimalSeparator", numberValuePostRequestBody.decimalSeparator, serializeJson);
        writer.writeObjectValue<Json>("groupSeparator", numberValuePostRequestBody.groupSeparator, serializeJson);
        writer.writeObjectValue<Json>("text", numberValuePostRequestBody.text, serializeJson);
        writer.writeAdditionalData(numberValuePostRequestBody.additionalData);
}
