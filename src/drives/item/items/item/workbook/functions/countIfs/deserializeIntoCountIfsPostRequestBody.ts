import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CountIfsPostRequestBody } from './countIfsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCountIfsPostRequestBody(countIfsPostRequestBody: CountIfsPostRequestBody | undefined = {} as CountIfsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { countIfsPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
