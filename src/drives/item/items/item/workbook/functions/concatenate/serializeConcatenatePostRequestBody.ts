import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ConcatenatePostRequestBody} from './concatenatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConcatenatePostRequestBody(concatenatePostRequestBody: ConcatenatePostRequestBody | undefined = {} as ConcatenatePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", concatenatePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(concatenatePostRequestBody.additionalData);
}
