import { createLicenseDetailsFromDiscriminatorValue } from './createLicenseDetailsFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type LicenseDetails } from './licenseDetails';
import { type LicenseDetailsCollectionResponse } from './licenseDetailsCollectionResponse';
import { serializeLicenseDetails } from './serializeLicenseDetails';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseDetailsCollectionResponse(licenseDetailsCollectionResponse: LicenseDetailsCollectionResponse | undefined = {} as LicenseDetailsCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(licenseDetailsCollectionResponse),
        "value": n => { licenseDetailsCollectionResponse.value = n.getCollectionOfObjectValues<LicenseDetails>(createLicenseDetailsFromDiscriminatorValue); },
    }
}
