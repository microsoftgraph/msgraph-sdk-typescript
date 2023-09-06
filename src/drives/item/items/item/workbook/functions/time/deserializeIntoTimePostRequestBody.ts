import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TimePostRequestBody } from './timePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimePostRequestBody(timePostRequestBody: TimePostRequestBody | undefined = {} as TimePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "hour": n => { timePostRequestBody.hour = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "minute": n => { timePostRequestBody.minute = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "second": n => { timePostRequestBody.second = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
