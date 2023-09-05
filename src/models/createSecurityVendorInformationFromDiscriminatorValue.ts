import { deserializeIntoSecurityVendorInformation } from './deserializeIntoSecurityVendorInformation';
import { type SecurityVendorInformation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecurityVendorInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurityVendorInformation;
}
