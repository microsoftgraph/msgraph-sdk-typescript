import {GeoMeanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeoMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GeoMeanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GeoMeanPostRequestBody();
}
