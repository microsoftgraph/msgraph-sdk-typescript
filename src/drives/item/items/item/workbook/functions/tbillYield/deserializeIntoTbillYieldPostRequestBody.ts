import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TbillYieldPostRequestBody } from './tbillYieldPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTbillYieldPostRequestBody(tbillYieldPostRequestBody: TbillYieldPostRequestBody | undefined = {} as TbillYieldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "maturity": n => { tbillYieldPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { tbillYieldPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { tbillYieldPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
