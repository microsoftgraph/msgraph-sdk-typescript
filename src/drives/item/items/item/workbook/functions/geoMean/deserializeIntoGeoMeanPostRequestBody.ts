import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {GeoMeanPostRequestBody} from './geoMeanPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeoMeanPostRequestBody(geoMeanPostRequestBody: GeoMeanPostRequestBody | undefined = {} as GeoMeanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { geoMeanPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
