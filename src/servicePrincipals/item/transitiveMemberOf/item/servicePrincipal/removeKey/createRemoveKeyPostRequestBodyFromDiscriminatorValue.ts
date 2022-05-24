import {RemoveKeyPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveKeyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveKeyPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveKeyPostRequestBodyImpl();
}
