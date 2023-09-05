import { deserializeIntoHypGeom_DistPostRequestBody } from './deserializeIntoHypGeom_DistPostRequestBody';
import { type HypGeom_DistPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHypGeom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHypGeom_DistPostRequestBody;
}
