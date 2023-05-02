import {deserializeIntoHypGeom_DistPostRequestBody} from './deserializeIntoHypGeom_DistPostRequestBody';
import {HypGeom_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHypGeom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHypGeom_DistPostRequestBody;
}
