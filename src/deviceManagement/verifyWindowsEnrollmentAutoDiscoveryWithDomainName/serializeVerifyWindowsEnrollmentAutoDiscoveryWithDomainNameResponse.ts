import type {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse(writer: SerializationWriter, verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined = {} as VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse) : void {
        writer.writeBooleanValue("value", verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.value);
        writer.writeAdditionalData(verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.additionalData);
}
