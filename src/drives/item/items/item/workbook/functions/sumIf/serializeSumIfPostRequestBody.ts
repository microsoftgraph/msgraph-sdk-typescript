import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SumIfPostRequestBody } from './sumIfPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSumIfPostRequestBody(writer: SerializationWriter, sumIfPostRequestBody: SumIfPostRequestBody | undefined = {} as SumIfPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", sumIfPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("range", sumIfPostRequestBody.range, serializeJson);
        writer.writeObjectValue<Json>("sumRange", sumIfPostRequestBody.sumRange, serializeJson);
        writer.writeAdditionalData(sumIfPostRequestBody.additionalData);
}
