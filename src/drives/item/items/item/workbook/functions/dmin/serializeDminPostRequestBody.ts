import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DminPostRequestBody} from './dminPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDminPostRequestBody(dminPostRequestBody: DminPostRequestBody | undefined = {} as DminPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("criteria", dminPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dminPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dminPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dminPostRequestBody.additionalData);
}
