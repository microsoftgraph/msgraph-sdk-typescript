import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DecimalPostRequestBody} from './decimalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDecimalPostRequestBody(decimalPostRequestBody: DecimalPostRequestBody | undefined = {} as DecimalPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", decimalPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("radix", decimalPostRequestBody.radix, serializeJson);
        writer.writeAdditionalData(decimalPostRequestBody.additionalData);
}
