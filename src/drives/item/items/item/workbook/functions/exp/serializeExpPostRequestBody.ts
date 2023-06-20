import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ExpPostRequestBody} from './expPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExpPostRequestBody(expPostRequestBody: ExpPostRequestBody | undefined = {} as ExpPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", expPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(expPostRequestBody.additionalData);
}
