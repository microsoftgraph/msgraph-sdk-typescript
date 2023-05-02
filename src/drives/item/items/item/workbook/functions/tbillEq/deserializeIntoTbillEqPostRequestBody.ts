import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TbillEqPostRequestBody} from './tbillEqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTbillEqPostRequestBody(tbillEqPostRequestBody: TbillEqPostRequestBody | undefined = {} as TbillEqPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "discount": n => { tbillEqPostRequestBody.discount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { tbillEqPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { tbillEqPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
