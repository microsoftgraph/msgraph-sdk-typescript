import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DproductPostRequestBody } from './dproductPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDproductPostRequestBody(dproductPostRequestBody: DproductPostRequestBody | undefined = {} as DproductPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dproductPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "database": n => { dproductPostRequestBody.database = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "field": n => { dproductPostRequestBody.field = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
