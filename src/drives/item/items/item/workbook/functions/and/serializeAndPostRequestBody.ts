import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AndPostRequestBody} from './andPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndPostRequestBody(writer: SerializationWriter, andPostRequestBody: AndPostRequestBody | undefined = {} as AndPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", andPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(andPostRequestBody.additionalData);
}
