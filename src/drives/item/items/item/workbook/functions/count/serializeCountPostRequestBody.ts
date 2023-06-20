import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountPostRequestBody} from './countPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountPostRequestBody(countPostRequestBody: CountPostRequestBody | undefined = {} as CountPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", countPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(countPostRequestBody.additionalData);
}
