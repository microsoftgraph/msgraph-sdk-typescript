import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type QuotientPostRequestBody } from './quotientPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoQuotientPostRequestBody(quotientPostRequestBody: QuotientPostRequestBody | undefined = {} as QuotientPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "denominator": n => { quotientPostRequestBody.denominator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numerator": n => { quotientPostRequestBody.numerator = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
