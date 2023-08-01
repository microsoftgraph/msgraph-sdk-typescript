import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CountPostRequestBody} from './countPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountPostRequestBody(writer: SerializationWriter, countPostRequestBody: CountPostRequestBody | undefined = {} as CountPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", countPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(countPostRequestBody.additionalData);
}
