import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ConcatenatePostRequestBody} from './concatenatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConcatenatePostRequestBody(writer: SerializationWriter, concatenatePostRequestBody: ConcatenatePostRequestBody | undefined = {} as ConcatenatePostRequestBody) : void {
        writer.writeObjectValue<Json>("values", concatenatePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(concatenatePostRequestBody.additionalData);
}
