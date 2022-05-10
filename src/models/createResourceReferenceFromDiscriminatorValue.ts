import {ResourceReferenceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceReferenceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceReferenceImpl();
}
