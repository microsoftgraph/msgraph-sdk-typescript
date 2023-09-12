import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AtanPostRequestBody } from './atanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAtanPostRequestBody(atanPostRequestBody: AtanPostRequestBody | undefined = {} as AtanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { atanPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
