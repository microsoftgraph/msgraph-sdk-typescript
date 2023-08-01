import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SqrtPostRequestBody} from './sqrtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSqrtPostRequestBody(writer: SerializationWriter, sqrtPostRequestBody: SqrtPostRequestBody | undefined = {} as SqrtPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sqrtPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sqrtPostRequestBody.additionalData);
}
