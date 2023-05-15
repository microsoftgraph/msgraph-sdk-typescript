import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SqrtPiPostRequestBody} from './sqrtPiPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSqrtPiPostRequestBody(writer: SerializationWriter, sqrtPiPostRequestBody: SqrtPiPostRequestBody | undefined = {} as SqrtPiPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sqrtPiPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sqrtPiPostRequestBody.additionalData);
}
