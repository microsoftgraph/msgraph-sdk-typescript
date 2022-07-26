import {AsHierarchyResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAsHierarchyResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AsHierarchyResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AsHierarchyResponse();
}
