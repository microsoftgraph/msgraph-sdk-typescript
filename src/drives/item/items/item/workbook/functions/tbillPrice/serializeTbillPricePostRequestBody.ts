import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TbillPricePostRequestBody } from './tbillPricePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTbillPricePostRequestBody(writer: SerializationWriter, tbillPricePostRequestBody: TbillPricePostRequestBody | undefined = {} as TbillPricePostRequestBody) : void {
        writer.writeObjectValue<Json>("discount", tbillPricePostRequestBody.discount, serializeJson);
        writer.writeObjectValue<Json>("maturity", tbillPricePostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", tbillPricePostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(tbillPricePostRequestBody.additionalData);
}
