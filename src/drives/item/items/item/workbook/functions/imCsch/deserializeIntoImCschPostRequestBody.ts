import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImCschPostRequestBody } from './imCschPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImCschPostRequestBody(imCschPostRequestBody: ImCschPostRequestBody | undefined = {} as ImCschPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCschPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
