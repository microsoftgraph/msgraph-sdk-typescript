import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IrrPostRequestBody } from './irrPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIrrPostRequestBody(irrPostRequestBody: IrrPostRequestBody | undefined = {} as IrrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "guess": n => { irrPostRequestBody.guess = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "values": n => { irrPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
