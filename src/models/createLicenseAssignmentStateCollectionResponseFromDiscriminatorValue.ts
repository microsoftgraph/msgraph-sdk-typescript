import {LicenseAssignmentStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseAssignmentStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseAssignmentStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseAssignmentStateCollectionResponse();
}
