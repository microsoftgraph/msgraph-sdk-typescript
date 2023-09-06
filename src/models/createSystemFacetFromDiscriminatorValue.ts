import { deserializeIntoSystemFacet } from './deserializeIntoSystemFacet';
import { type SystemFacet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSystemFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSystemFacet;
}
