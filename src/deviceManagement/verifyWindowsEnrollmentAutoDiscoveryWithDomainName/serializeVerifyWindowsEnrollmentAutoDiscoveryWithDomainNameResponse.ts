import { type VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse } from './verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse(writer: SerializationWriter, verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined = {} as VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse) : void {
        writer.writeBooleanValue("value", verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.value);
        writer.writeAdditionalData(verifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse.additionalData);
}
