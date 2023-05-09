import {deserializeIntoGeoMeanPostRequestBody} from './deserializeIntoGeoMeanPostRequestBody';
import {GeoMeanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeoMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGeoMeanPostRequestBody;
}
