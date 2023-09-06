import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImSinhPostRequestBody } from './imSinhPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImSinhPostRequestBody(imSinhPostRequestBody: ImSinhPostRequestBody | undefined = {} as ImSinhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSinhPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
