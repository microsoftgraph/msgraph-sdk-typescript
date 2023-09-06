import { deserializeIntoBesselIPostRequestBody } from './deserializeIntoBesselIPostRequestBody';
import { type BesselIPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBesselIPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBesselIPostRequestBody;
}
