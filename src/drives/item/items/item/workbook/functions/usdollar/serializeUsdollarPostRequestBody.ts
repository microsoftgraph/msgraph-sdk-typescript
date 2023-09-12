import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type UsdollarPostRequestBody } from './usdollarPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUsdollarPostRequestBody(writer: SerializationWriter, usdollarPostRequestBody: UsdollarPostRequestBody | undefined = {} as UsdollarPostRequestBody) : void {
        writer.writeObjectValue<Json>("decimals", usdollarPostRequestBody.decimals, serializeJson);
        writer.writeObjectValue<Json>("number", usdollarPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(usdollarPostRequestBody.additionalData);
}
