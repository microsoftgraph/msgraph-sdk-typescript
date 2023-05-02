import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DvarPPostRequestBody} from './dvarPPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDvarPPostRequestBody(writer: SerializationWriter, dvarPPostRequestBody: DvarPPostRequestBody | undefined = {} as DvarPPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dvarPPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dvarPPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dvarPPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dvarPPostRequestBody.additionalData);
}
