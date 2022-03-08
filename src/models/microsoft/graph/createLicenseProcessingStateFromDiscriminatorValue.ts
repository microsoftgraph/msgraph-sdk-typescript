import {LicenseProcessingState} from './licenseProcessingState';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseProcessingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseProcessingState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseProcessingState();
}
