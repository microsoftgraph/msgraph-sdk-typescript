import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {QuotientPostRequestBody} from './quotientPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQuotientPostRequestBody(writer: SerializationWriter, quotientPostRequestBody: QuotientPostRequestBody | undefined = {} as QuotientPostRequestBody) : void {
        writer.writeObjectValue<Json>("denominator", quotientPostRequestBody.denominator, serializeJson);
        writer.writeObjectValue<Json>("numerator", quotientPostRequestBody.numerator, serializeJson);
        writer.writeAdditionalData(quotientPostRequestBody.additionalData);
}
