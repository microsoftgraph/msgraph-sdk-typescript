import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DvarPostRequestBody} from './dvarPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDvarPostRequestBody(writer: SerializationWriter, dvarPostRequestBody: DvarPostRequestBody | undefined = {} as DvarPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dvarPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dvarPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dvarPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dvarPostRequestBody.additionalData);
}
