import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Ceiling_MathPostRequestBody} from './ceiling_MathPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCeiling_MathPostRequestBody(ceiling_MathPostRequestBody: Ceiling_MathPostRequestBody | undefined = {} as Ceiling_MathPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("mode", ceiling_MathPostRequestBody.mode, serializeJson);
        writer.writeObjectValue<Json>("number", ceiling_MathPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("significance", ceiling_MathPostRequestBody.significance, serializeJson);
        writer.writeAdditionalData(ceiling_MathPostRequestBody.additionalData);
}
