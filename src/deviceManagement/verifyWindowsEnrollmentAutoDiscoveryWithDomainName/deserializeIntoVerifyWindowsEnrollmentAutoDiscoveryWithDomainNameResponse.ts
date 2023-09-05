import { type VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse } from './verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse(verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined = {} as VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.value = n.getBooleanValue(); },
    }
}
