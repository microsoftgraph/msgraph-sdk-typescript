import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Floor_MathPostRequestBody} from './floor_MathPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFloor_MathPostRequestBody(floor_MathPostRequestBody: Floor_MathPostRequestBody | undefined = {} as Floor_MathPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("mode", floor_MathPostRequestBody.mode, serializeJson);
        writer.writeObjectValue<Json>("number", floor_MathPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", floor_MathPostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(floor_MathPostRequestBody.additionalData);
}
