import {DomainImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainImpl();
}
