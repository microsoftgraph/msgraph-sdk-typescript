import { deserializeIntoGeoMeanPostRequestBody } from './deserializeIntoGeoMeanPostRequestBody';
import { type GeoMeanPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGeoMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGeoMeanPostRequestBody;
}
