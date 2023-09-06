import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type Log10PostRequestBody } from './log10PostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLog10PostRequestBody(log10PostRequestBody: Log10PostRequestBody | undefined = {} as Log10PostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { log10PostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
