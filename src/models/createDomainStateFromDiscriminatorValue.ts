import {DomainStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainStateImpl();
}
