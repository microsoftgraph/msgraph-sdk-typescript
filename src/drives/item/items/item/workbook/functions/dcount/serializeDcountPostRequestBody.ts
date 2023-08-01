import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DcountPostRequestBody} from './dcountPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDcountPostRequestBody(writer: SerializationWriter, dcountPostRequestBody: DcountPostRequestBody | undefined = {} as DcountPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dcountPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dcountPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dcountPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dcountPostRequestBody.additionalData);
}
