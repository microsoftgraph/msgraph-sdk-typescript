import {deserializeIntoBesselYPostRequestBody} from './deserializeIntoBesselYPostRequestBody';
import {BesselYPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBesselYPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBesselYPostRequestBody;
}
