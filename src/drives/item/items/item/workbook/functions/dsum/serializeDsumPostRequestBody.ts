import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DsumPostRequestBody} from './dsumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDsumPostRequestBody(writer: SerializationWriter, dsumPostRequestBody: DsumPostRequestBody | undefined = {} as DsumPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dsumPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dsumPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dsumPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dsumPostRequestBody.additionalData);
}
