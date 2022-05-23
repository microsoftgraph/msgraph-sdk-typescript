import {SecurityVendorInformationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityVendorInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityVendorInformationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityVendorInformationImpl();
}
