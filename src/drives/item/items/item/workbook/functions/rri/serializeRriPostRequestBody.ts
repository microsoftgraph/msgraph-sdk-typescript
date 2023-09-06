import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type RriPostRequestBody } from './rriPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRriPostRequestBody(writer: SerializationWriter, rriPostRequestBody: RriPostRequestBody | undefined = {} as RriPostRequestBody) : void {
        writer.writeObjectValue<Json>("fv", rriPostRequestBody.fv, serializeJson);
        writer.writeObjectValue<Json>("nper", rriPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("pv", rriPostRequestBody.pv, serializeJson);
        writer.writeAdditionalData(rriPostRequestBody.additionalData);
}
