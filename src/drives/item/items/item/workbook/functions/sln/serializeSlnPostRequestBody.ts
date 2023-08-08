import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SlnPostRequestBody} from './slnPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSlnPostRequestBody(writer: SerializationWriter, slnPostRequestBody: SlnPostRequestBody | undefined = {} as SlnPostRequestBody) : void {
        writer.writeObjectValue<Json>("cost", slnPostRequestBody.cost, serializeJson);
        writer.writeObjectValue<Json>("life", slnPostRequestBody.life, serializeJson);
        writer.writeObjectValue<Json>("salvage", slnPostRequestBody.salvage, serializeJson);
        writer.writeAdditionalData(slnPostRequestBody.additionalData);
}
