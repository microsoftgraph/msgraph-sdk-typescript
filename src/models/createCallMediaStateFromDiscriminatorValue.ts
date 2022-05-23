import {CallMediaStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallMediaStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallMediaStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallMediaStateImpl();
}
