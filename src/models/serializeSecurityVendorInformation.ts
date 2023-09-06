import { type SecurityVendorInformation } from './securityVendorInformation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSecurityVendorInformation(writer: SerializationWriter, securityVendorInformation: SecurityVendorInformation | undefined = {} as SecurityVendorInformation) : void {
        writer.writeStringValue("@odata.type", securityVendorInformation.odataType);
        writer.writeStringValue("provider", securityVendorInformation.provider);
        writer.writeStringValue("providerVersion", securityVendorInformation.providerVersion);
        writer.writeStringValue("subProvider", securityVendorInformation.subProvider);
        writer.writeStringValue("vendor", securityVendorInformation.vendor);
        writer.writeAdditionalData(securityVendorInformation.additionalData);
}
