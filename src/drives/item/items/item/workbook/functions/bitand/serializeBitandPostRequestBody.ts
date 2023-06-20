import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BitandPostRequestBody} from './bitandPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitandPostRequestBody(bitandPostRequestBody: BitandPostRequestBody | undefined = {} as BitandPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number1", bitandPostRequestBody.number1, serializeJson);
        writer.writeObjectValue<Json>("number2", bitandPostRequestBody.number2, serializeJson);
        writer.writeAdditionalData(bitandPostRequestBody.additionalData);
}
