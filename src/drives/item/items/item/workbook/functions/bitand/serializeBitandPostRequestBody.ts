import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BitandPostRequestBody} from './bitandPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitandPostRequestBody(writer: SerializationWriter, bitandPostRequestBody: BitandPostRequestBody | undefined = {} as BitandPostRequestBody) : void {
        writer.writeObjectValue<Json>("number1", bitandPostRequestBody.number1, serializeJson);
        writer.writeObjectValue<Json>("number2", bitandPostRequestBody.number2, serializeJson);
        writer.writeAdditionalData(bitandPostRequestBody.additionalData);
}
