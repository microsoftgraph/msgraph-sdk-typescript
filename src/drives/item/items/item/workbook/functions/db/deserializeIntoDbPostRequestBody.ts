import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DbPostRequestBody } from './dbPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDbPostRequestBody(dbPostRequestBody: DbPostRequestBody | undefined = {} as DbPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cost": n => { dbPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "life": n => { dbPostRequestBody.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "month": n => { dbPostRequestBody.month = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "period": n => { dbPostRequestBody.period = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { dbPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
