import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImCoshPostRequestBody } from './imCoshPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImCoshPostRequestBody(imCoshPostRequestBody: ImCoshPostRequestBody | undefined = {} as ImCoshPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCoshPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
