import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImLnPostRequestBody } from './imLnPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImLnPostRequestBody(imLnPostRequestBody: ImLnPostRequestBody | undefined = {} as ImLnPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imLnPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
