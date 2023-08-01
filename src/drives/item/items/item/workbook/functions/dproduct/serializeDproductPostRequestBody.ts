import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DproductPostRequestBody} from './dproductPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDproductPostRequestBody(writer: SerializationWriter, dproductPostRequestBody: DproductPostRequestBody | undefined = {} as DproductPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dproductPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dproductPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dproductPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dproductPostRequestBody.additionalData);
}
