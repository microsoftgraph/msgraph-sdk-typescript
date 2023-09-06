import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DollarDePostRequestBody } from './dollarDePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDollarDePostRequestBody(dollarDePostRequestBody: DollarDePostRequestBody | undefined = {} as DollarDePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fraction": n => { dollarDePostRequestBody.fraction = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "fractionalDollar": n => { dollarDePostRequestBody.fractionalDollar = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
