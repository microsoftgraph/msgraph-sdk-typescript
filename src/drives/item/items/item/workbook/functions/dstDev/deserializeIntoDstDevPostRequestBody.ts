import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DstDevPostRequestBody } from './dstDevPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDstDevPostRequestBody(dstDevPostRequestBody: DstDevPostRequestBody | undefined = {} as DstDevPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dstDevPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "database": n => { dstDevPostRequestBody.database = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "field": n => { dstDevPostRequestBody.field = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
