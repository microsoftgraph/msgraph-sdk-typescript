import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CountAPostRequestBody } from './countAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCountAPostRequestBody(writer: SerializationWriter, countAPostRequestBody: CountAPostRequestBody | undefined = {} as CountAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", countAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(countAPostRequestBody.additionalData);
}
