import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DmaxPostRequestBody} from './dmaxPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDmaxPostRequestBody(writer: SerializationWriter, dmaxPostRequestBody: DmaxPostRequestBody | undefined = {} as DmaxPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", dmaxPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", dmaxPostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", dmaxPostRequestBody.field, serializeJson);
        writer.writeAdditionalData(dmaxPostRequestBody.additionalData);
}
