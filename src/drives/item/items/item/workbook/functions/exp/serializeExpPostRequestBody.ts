import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ExpPostRequestBody} from './expPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExpPostRequestBody(writer: SerializationWriter, expPostRequestBody: ExpPostRequestBody | undefined = {} as ExpPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", expPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(expPostRequestBody.additionalData);
}
