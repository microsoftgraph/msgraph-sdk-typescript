import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsrefPostRequestBody } from './isrefPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIsrefPostRequestBody(isrefPostRequestBody: IsrefPostRequestBody | undefined = {} as IsrefPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isrefPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
