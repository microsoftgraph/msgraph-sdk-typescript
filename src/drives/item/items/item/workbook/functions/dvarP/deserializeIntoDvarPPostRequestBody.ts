import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DvarPPostRequestBody } from './dvarPPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDvarPPostRequestBody(dvarPPostRequestBody: DvarPPostRequestBody | undefined = {} as DvarPPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dvarPPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "database": n => { dvarPPostRequestBody.database = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "field": n => { dvarPPostRequestBody.field = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
