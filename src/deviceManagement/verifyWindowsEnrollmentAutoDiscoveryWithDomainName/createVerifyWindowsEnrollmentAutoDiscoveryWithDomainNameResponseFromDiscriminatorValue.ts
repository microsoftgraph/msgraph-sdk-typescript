import { deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse } from './deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse';
import { type VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse;
}
