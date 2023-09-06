import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SydPostRequestBody } from './sydPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSydPostRequestBody(sydPostRequestBody: SydPostRequestBody | undefined = {} as SydPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "cost": n => { sydPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "life": n => { sydPostRequestBody.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "per": n => { sydPostRequestBody.per = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { sydPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
