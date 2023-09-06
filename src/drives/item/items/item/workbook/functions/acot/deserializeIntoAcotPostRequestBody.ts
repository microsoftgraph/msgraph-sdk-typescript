import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type AcotPostRequestBody } from './acotPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAcotPostRequestBody(acotPostRequestBody: AcotPostRequestBody | undefined = {} as AcotPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { acotPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
