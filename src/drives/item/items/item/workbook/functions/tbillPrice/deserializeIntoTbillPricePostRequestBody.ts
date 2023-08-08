import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TbillPricePostRequestBody} from './tbillPricePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTbillPricePostRequestBody(tbillPricePostRequestBody: TbillPricePostRequestBody | undefined = {} as TbillPricePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "discount": n => { tbillPricePostRequestBody.discount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { tbillPricePostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { tbillPricePostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
