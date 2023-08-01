import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {UsdollarPostRequestBody} from './usdollarPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsdollarPostRequestBody(writer: SerializationWriter, usdollarPostRequestBody: UsdollarPostRequestBody | undefined = {} as UsdollarPostRequestBody) : void {
        writer.writeObjectValue<Json>("decimals", usdollarPostRequestBody.decimals, serializeJson);
        writer.writeObjectValue<Json>("number", usdollarPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(usdollarPostRequestBody.additionalData);
}
