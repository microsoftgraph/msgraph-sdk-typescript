import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DgetPostRequestBody} from './dgetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDgetPostRequestBody(writer: SerializationWriter, dgetPostRequestBody: DgetPostRequestBody | undefined = {} as DgetPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dgetPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dgetPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dgetPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dgetPostRequestBody.additionalData);
}
