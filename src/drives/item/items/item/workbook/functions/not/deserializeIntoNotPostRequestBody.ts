import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NotPostRequestBody } from './notPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoNotPostRequestBody(notPostRequestBody: NotPostRequestBody | undefined = {} as NotPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "logical": n => { notPostRequestBody.logical = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
