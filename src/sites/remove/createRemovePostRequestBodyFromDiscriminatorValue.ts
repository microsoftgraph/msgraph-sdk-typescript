import {RemovePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemovePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemovePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemovePostRequestBodyImpl();
}
