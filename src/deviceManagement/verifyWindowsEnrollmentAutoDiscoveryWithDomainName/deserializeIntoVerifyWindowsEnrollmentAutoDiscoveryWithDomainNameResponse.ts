import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse(verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined = {} as VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.value = n.getBooleanValue(); },
    }
}
