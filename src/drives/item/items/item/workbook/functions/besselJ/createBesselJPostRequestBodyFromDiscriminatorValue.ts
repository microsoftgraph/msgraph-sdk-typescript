import {deserializeIntoBesselJPostRequestBody} from './deserializeIntoBesselJPostRequestBody';
import {BesselJPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBesselJPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBesselJPostRequestBody;
}
