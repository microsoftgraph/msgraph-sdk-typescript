import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DaveragePostRequestBody} from './daveragePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDaveragePostRequestBody(writer: SerializationWriter, daveragePostRequestBody: DaveragePostRequestBody | undefined = {} as DaveragePostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", daveragePostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("database", daveragePostRequestBody.database, serializeJson);
        writer.writeObjectValue<Json>("field", daveragePostRequestBody.field, serializeJson);
        writer.writeAdditionalData(daveragePostRequestBody.additionalData);
}
