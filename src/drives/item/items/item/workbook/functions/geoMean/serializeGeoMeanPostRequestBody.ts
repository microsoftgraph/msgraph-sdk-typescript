import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GeoMeanPostRequestBody} from './geoMeanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGeoMeanPostRequestBody(geoMeanPostRequestBody: GeoMeanPostRequestBody | undefined = {} as GeoMeanPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", geoMeanPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(geoMeanPostRequestBody.additionalData);
}
