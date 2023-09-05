import { deserializeIntoLicenseDetailsCollectionResponse } from './deserializeIntoLicenseDetailsCollectionResponse';
import { type LicenseDetailsCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLicenseDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLicenseDetailsCollectionResponse;
}
