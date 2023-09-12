import { deserializeIntoVerifiedDomain } from './deserializeIntoVerifiedDomain';
import { type VerifiedDomain } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVerifiedDomainFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVerifiedDomain;
}
