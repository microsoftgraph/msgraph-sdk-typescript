import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TbillPricePostRequestBody} from './tbillPricePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTbillPricePostRequestBody(writer: SerializationWriter, tbillPricePostRequestBody: TbillPricePostRequestBody | undefined = {} as TbillPricePostRequestBody) : void {
        writer.writeObjectValue<Json>("discount", tbillPricePostRequestBody.discount, serializeJson);
        writer.writeObjectValue<Json>("maturity", tbillPricePostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", tbillPricePostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(tbillPricePostRequestBody.additionalData);
}
