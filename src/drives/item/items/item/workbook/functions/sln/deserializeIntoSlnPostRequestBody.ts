import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SlnPostRequestBody } from './slnPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSlnPostRequestBody(slnPostRequestBody: SlnPostRequestBody | undefined = {} as SlnPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cost": n => { slnPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "life": n => { slnPostRequestBody.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { slnPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
