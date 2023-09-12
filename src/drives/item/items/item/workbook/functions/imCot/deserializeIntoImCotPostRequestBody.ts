import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImCotPostRequestBody } from './imCotPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImCotPostRequestBody(imCotPostRequestBody: ImCotPostRequestBody | undefined = {} as ImCotPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCotPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
