import {DomainIdentitySourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainIdentitySourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainIdentitySourceImpl();
}
