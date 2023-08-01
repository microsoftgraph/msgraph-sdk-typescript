import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DcountAPostRequestBody} from './dcountAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDcountAPostRequestBody(writer: SerializationWriter, dcountAPostRequestBody: DcountAPostRequestBody | undefined = {} as DcountAPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dcountAPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dcountAPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dcountAPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dcountAPostRequestBody.additionalData);
}
