import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TbillEqPostRequestBody } from './tbillEqPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTbillEqPostRequestBody(tbillEqPostRequestBody: TbillEqPostRequestBody | undefined = {} as TbillEqPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "discount": n => { tbillEqPostRequestBody.discount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { tbillEqPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { tbillEqPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
