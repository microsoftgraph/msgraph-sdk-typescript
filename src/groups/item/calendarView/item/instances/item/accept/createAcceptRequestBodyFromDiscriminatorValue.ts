import {AcceptRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcceptRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AcceptRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AcceptRequestBodyImpl();
}
