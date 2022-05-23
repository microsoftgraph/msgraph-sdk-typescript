import {VerifiedDomainImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifiedDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifiedDomainImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifiedDomainImpl();
}
