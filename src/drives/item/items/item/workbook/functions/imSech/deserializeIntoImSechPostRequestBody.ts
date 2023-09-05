import { createJsonFromDiscriminatorValue } from '../../../../../../../models/createJsonFromDiscriminatorValue';
import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ImSechPostRequestBody } from './imSechPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImSechPostRequestBody(imSechPostRequestBody: ImSechPostRequestBody | undefined = {} as ImSechPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSechPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
