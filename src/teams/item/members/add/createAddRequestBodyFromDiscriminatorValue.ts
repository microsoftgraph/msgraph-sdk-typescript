import {AddRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddRequestBodyImpl();
}
