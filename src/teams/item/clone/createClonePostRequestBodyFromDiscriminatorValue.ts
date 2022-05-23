import {ClonePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClonePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClonePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClonePostRequestBodyImpl();
}
