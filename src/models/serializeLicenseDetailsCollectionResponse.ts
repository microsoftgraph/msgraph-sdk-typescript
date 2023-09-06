import { type LicenseDetails } from './licenseDetails';
import { type LicenseDetailsCollectionResponse } from './licenseDetailsCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeLicenseDetails } from './serializeLicenseDetails';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLicenseDetailsCollectionResponse(writer: SerializationWriter, licenseDetailsCollectionResponse: LicenseDetailsCollectionResponse | undefined = {} as LicenseDetailsCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, licenseDetailsCollectionResponse)
        writer.writeCollectionOfObjectValues<LicenseDetails>("value", licenseDetailsCollectionResponse.value, serializeLicenseDetails);
}
