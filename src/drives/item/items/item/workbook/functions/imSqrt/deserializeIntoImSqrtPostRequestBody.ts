import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImSqrtPostRequestBody } from './imSqrtPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImSqrtPostRequestBody(imSqrtPostRequestBody: ImSqrtPostRequestBody | undefined = {} as ImSqrtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSqrtPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
