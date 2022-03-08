import {VerifiedDomain} from './verifiedDomain';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifiedDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifiedDomain {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifiedDomain();
}
