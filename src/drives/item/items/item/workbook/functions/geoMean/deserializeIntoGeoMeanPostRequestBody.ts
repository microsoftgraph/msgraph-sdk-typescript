import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GeoMeanPostRequestBody} from './geoMeanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeoMeanPostRequestBody(geoMeanPostRequestBody: GeoMeanPostRequestBody | undefined = {} as GeoMeanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { geoMeanPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
