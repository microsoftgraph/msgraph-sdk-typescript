import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LogPostRequestBody } from './logPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLogPostRequestBody(logPostRequestBody: LogPostRequestBody | undefined = {} as LogPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "base": n => { logPostRequestBody.base = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { logPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
