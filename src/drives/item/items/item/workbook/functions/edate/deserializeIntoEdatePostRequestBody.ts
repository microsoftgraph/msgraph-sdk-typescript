import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type EdatePostRequestBody } from './edatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdatePostRequestBody(edatePostRequestBody: EdatePostRequestBody | undefined = {} as EdatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "months": n => { edatePostRequestBody.months = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { edatePostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
