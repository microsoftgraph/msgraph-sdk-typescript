import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DmaxPostRequestBody} from './dmaxPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDmaxPostRequestBody(dmaxPostRequestBody: DmaxPostRequestBody | undefined = {} as DmaxPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("criteria", dmaxPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dmaxPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dmaxPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dmaxPostRequestBody.additionalData);
}
