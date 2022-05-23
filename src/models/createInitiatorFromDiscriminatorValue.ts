import {InitiatorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInitiatorFromDiscriminatorValue(parseNode: ParseNode | undefined) : InitiatorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InitiatorImpl();
}
