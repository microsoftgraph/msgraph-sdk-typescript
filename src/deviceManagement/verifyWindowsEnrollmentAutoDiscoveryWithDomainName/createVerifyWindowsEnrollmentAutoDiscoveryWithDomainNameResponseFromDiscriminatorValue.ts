import {deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse;
}
