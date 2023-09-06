import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type StDev_PPostRequestBody } from './stDev_PPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStDev_PPostRequestBody(writer: SerializationWriter, stDev_PPostRequestBody: StDev_PPostRequestBody | undefined = {} as StDev_PPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", stDev_PPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(stDev_PPostRequestBody.additionalData);
}
