import {ResourceAccessImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceAccessFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceAccessImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceAccessImpl();
}
