import {LinkedResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLinkedResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : LinkedResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LinkedResourceImpl();
}
