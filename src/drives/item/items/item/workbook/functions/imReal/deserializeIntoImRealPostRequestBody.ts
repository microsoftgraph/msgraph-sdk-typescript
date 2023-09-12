import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImRealPostRequestBody } from './imRealPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImRealPostRequestBody(imRealPostRequestBody: ImRealPostRequestBody | undefined = {} as ImRealPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imRealPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
