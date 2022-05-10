import {LicenseDetailsCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseDetailsCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseDetailsCollectionResponseImpl();
}
