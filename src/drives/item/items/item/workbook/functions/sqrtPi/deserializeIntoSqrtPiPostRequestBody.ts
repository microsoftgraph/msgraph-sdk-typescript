import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SqrtPiPostRequestBody } from './sqrtPiPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSqrtPiPostRequestBody(sqrtPiPostRequestBody: SqrtPiPostRequestBody | undefined = {} as SqrtPiPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { sqrtPiPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
