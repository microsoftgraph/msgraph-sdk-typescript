import {deserializeIntoSecurityVendorInformation} from './deserializeIntoSecurityVendorInformation';
import {SecurityVendorInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityVendorInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurityVendorInformation;
}
