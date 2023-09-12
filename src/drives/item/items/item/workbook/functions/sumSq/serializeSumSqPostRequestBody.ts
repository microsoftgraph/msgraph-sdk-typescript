import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SumSqPostRequestBody } from './sumSqPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSumSqPostRequestBody(writer: SerializationWriter, sumSqPostRequestBody: SumSqPostRequestBody | undefined = {} as SumSqPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", sumSqPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(sumSqPostRequestBody.additionalData);
}
