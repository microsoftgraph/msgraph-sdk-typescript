import { deserializeIntoLicenseDetails } from './deserializeIntoLicenseDetails';
import { type LicenseDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLicenseDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLicenseDetails;
}
