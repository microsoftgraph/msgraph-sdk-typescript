import { type SecurityVendorInformation } from './securityVendorInformation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityVendorInformation(securityVendorInformation: SecurityVendorInformation | undefined = {} as SecurityVendorInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { securityVendorInformation.odataType = n.getStringValue(); },
        "provider": n => { securityVendorInformation.provider = n.getStringValue(); },
        "providerVersion": n => { securityVendorInformation.providerVersion = n.getStringValue(); },
        "subProvider": n => { securityVendorInformation.subProvider = n.getStringValue(); },
        "vendor": n => { securityVendorInformation.vendor = n.getStringValue(); },
    }
}
