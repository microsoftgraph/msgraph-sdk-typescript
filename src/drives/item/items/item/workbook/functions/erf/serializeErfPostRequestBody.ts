import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ErfPostRequestBody } from './erfPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeErfPostRequestBody(writer: SerializationWriter, erfPostRequestBody: ErfPostRequestBody | undefined = {} as ErfPostRequestBody) : void {
        writer.writeObjectValue<Json>("lowerLimit", erfPostRequestBody.lowerLimit, serializeJson);
        writer.writeObjectValue<Json>("upperLimit", erfPostRequestBody.upperLimit, serializeJson);
        writer.writeAdditionalData(erfPostRequestBody.additionalData);
}
