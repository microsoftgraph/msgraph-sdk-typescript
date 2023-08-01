import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DeltaPostRequestBody} from './deltaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaPostRequestBody(writer: SerializationWriter, deltaPostRequestBody: DeltaPostRequestBody | undefined = {} as DeltaPostRequestBody) : void {
        writer.writeObjectValue<Json>("number1", deltaPostRequestBody.number1, serializeJson);
        writer.writeObjectValue<Json>("number2", deltaPostRequestBody.number2, serializeJson);
        writer.writeAdditionalData(deltaPostRequestBody.additionalData);
}
