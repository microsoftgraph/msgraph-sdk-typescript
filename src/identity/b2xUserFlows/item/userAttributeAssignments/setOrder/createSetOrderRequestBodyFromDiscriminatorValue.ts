import {SetOrderRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetOrderRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetOrderRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetOrderRequestBodyImpl();
}
