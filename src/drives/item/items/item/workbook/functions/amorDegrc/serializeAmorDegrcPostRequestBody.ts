import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AmorDegrcPostRequestBody} from './amorDegrcPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAmorDegrcPostRequestBody(amorDegrcPostRequestBody: AmorDegrcPostRequestBody | undefined = {} as AmorDegrcPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", amorDegrcPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("cost", amorDegrcPostRequestBody.cost, serializeJson);
        writer.writeObjectValue<Json>("datePurchased", amorDegrcPostRequestBody.datePurchased, serializeJson);
        writer.writeObjectValue<Json>("firstPeriod", amorDegrcPostRequestBody.firstPeriod, serializeJson);
        writer.writeObjectValue<Json>("period", amorDegrcPostRequestBody.period, serializeJson);
        writer.writeObjectValue<Json>("rate", amorDegrcPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("salvage", amorDegrcPostRequestBody.salvage, serializeJson);
        writer.writeAdditionalData(amorDegrcPostRequestBody.additionalData);
}
