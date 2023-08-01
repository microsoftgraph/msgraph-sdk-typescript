import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AmorLincPostRequestBody} from './amorLincPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAmorLincPostRequestBody(writer: SerializationWriter, amorLincPostRequestBody: AmorLincPostRequestBody | undefined = {} as AmorLincPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", amorLincPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("cost", amorLincPostRequestBody.cost, serializeJson);
        writer.writeObjectValue<Json>("datePurchased", amorLincPostRequestBody.datePurchased, serializeJson);
        writer.writeObjectValue<Json>("firstPeriod", amorLincPostRequestBody.firstPeriod, serializeJson);
        writer.writeObjectValue<Json>("period", amorLincPostRequestBody.period, serializeJson);
        writer.writeObjectValue<Json>("rate", amorLincPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("salvage", amorLincPostRequestBody.salvage, serializeJson);
        writer.writeAdditionalData(amorLincPostRequestBody.additionalData);
}
