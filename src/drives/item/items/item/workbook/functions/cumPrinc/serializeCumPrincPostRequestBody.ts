import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CumPrincPostRequestBody} from './cumPrincPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCumPrincPostRequestBody(writer: SerializationWriter, cumPrincPostRequestBody: CumPrincPostRequestBody | undefined = {} as CumPrincPostRequestBody) : void {
        writer.writeObjectValue<Json>("endPeriod", cumPrincPostRequestBody.endPeriod, serializeJson);
        writer.writeObjectValue<Json>("nper", cumPrincPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("pv", cumPrincPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", cumPrincPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("startPeriod", cumPrincPostRequestBody.startPeriod, serializeJson);
        writer.writeObjectValue<Json>("type", cumPrincPostRequestBody.type, serializeJson);
        writer.writeAdditionalData(cumPrincPostRequestBody.additionalData);
}
