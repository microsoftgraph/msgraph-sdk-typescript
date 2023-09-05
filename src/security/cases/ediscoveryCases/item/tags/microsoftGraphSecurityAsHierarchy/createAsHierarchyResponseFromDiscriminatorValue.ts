import { deserializeIntoAsHierarchyResponse } from './deserializeIntoAsHierarchyResponse';
import { type AsHierarchyResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAsHierarchyResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAsHierarchyResponse;
}
