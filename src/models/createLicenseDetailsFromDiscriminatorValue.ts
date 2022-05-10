import {LicenseDetailsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseDetailsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseDetailsImpl();
}
