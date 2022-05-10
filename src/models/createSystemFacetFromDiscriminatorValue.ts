import {SystemFacetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSystemFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SystemFacetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SystemFacetImpl();
}
