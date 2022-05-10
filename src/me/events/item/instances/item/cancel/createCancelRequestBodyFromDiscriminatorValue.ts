import {CancelRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelRequestBodyImpl();
}
