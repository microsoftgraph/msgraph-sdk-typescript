import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ConvertPostRequestBody} from './convertPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConvertPostRequestBody(convertPostRequestBody: ConvertPostRequestBody | undefined = {} as ConvertPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("fromUnit", convertPostRequestBody.fromUnit, serializeJson);
        writer.writeObjectValue<Json>("number", convertPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("toUnit", convertPostRequestBody.toUnit, serializeJson);
        writer.writeAdditionalData(convertPostRequestBody.additionalData);
}
