import {AssignedLicenseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedLicenseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedLicenseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedLicenseCollectionResponse();
}
