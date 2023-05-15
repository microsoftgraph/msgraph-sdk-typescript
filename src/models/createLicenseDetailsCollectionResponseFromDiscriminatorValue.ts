import {deserializeIntoLicenseDetailsCollectionResponse} from './deserializeIntoLicenseDetailsCollectionResponse';
import {LicenseDetailsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLicenseDetailsCollectionResponse;
}
