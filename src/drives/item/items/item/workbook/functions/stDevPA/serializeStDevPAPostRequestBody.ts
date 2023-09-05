import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type StDevPAPostRequestBody } from './stDevPAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStDevPAPostRequestBody(writer: SerializationWriter, stDevPAPostRequestBody: StDevPAPostRequestBody | undefined = {} as StDevPAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", stDevPAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(stDevPAPostRequestBody.additionalData);
}
