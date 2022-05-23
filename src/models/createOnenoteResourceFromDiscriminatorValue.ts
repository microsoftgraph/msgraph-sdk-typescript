import {OnenoteResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteResourceImpl();
}
