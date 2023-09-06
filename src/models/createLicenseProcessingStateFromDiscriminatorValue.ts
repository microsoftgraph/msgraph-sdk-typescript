import { deserializeIntoLicenseProcessingState } from './deserializeIntoLicenseProcessingState';
import { type LicenseProcessingState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLicenseProcessingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLicenseProcessingState;
}
