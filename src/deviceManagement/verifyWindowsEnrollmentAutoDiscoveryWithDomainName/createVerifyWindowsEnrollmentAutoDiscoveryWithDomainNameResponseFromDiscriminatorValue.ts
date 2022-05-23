import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseImpl();
}
