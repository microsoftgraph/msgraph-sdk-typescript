import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type GeoMeanPostRequestBody } from './geoMeanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGeoMeanPostRequestBody(writer: SerializationWriter, geoMeanPostRequestBody: GeoMeanPostRequestBody | undefined = {} as GeoMeanPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", geoMeanPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(geoMeanPostRequestBody.additionalData);
}
