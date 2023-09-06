import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DegreesPostRequestBody } from './degreesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDegreesPostRequestBody(writer: SerializationWriter, degreesPostRequestBody: DegreesPostRequestBody | undefined = {} as DegreesPostRequestBody) : void {
        writer.writeObjectValue<Json>("angle", degreesPostRequestBody.angle, serializeJson);
        writer.writeAdditionalData(degreesPostRequestBody.additionalData);
}
