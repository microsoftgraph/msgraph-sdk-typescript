import {deserializeIntoVerifiedDomain} from './deserializeIntoVerifiedDomain';
import {VerifiedDomain} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifiedDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVerifiedDomain;
}
