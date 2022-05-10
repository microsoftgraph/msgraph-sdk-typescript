import {ResourceActionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceActionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceActionImpl();
}
