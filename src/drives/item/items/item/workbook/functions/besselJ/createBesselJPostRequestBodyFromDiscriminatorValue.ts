import { deserializeIntoBesselJPostRequestBody } from './deserializeIntoBesselJPostRequestBody';
import { type BesselJPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBesselJPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBesselJPostRequestBody;
}
