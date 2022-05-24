import {RemovePasswordPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemovePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemovePasswordPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemovePasswordPostRequestBodyImpl();
}
