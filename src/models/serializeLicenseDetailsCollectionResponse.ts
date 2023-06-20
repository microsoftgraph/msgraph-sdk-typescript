import {LicenseDetails} from './licenseDetails';
import {LicenseDetailsCollectionResponse} from './licenseDetailsCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLicenseDetails} from './serializeLicenseDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseDetailsCollectionResponse(licenseDetailsCollectionResponse: LicenseDetailsCollectionResponse | undefined = {} as LicenseDetailsCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, licenseDetailsCollectionResponse)
        writer.writeCollectionOfObjectValues<LicenseDetails>("value", licenseDetailsCollectionResponse.value, serializeLicenseDetails);
}
