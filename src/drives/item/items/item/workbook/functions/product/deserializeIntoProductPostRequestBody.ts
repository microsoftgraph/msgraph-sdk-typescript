import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ProductPostRequestBody } from './productPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProductPostRequestBody(productPostRequestBody: ProductPostRequestBody | undefined = {} as ProductPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { productPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
