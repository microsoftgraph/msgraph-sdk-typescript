import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ConvertPostRequestBody } from './convertPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConvertPostRequestBody(convertPostRequestBody: ConvertPostRequestBody | undefined = {} as ConvertPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fromUnit": n => { convertPostRequestBody.fromUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { convertPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "toUnit": n => { convertPostRequestBody.toUnit = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
