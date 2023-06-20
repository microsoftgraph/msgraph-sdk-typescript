import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DdbPostRequestBody} from './ddbPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDdbPostRequestBody(ddbPostRequestBody: DdbPostRequestBody | undefined = {} as DdbPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("cost", ddbPostRequestBody.cost, serializeJson);
        writer.writeObjectValue<Json>("factor", ddbPostRequestBody.factor, serializeJson);
        writer.writeObjectValue<Json>("life", ddbPostRequestBody.life, serializeJson);
        writer.writeObjectValue<Json>("period", ddbPostRequestBody.period, serializeJson);
        writer.writeObjectValue<Json>("salvage", ddbPostRequestBody.salvage, serializeJson);
        writer.writeAdditionalData(ddbPostRequestBody.additionalData);
}
