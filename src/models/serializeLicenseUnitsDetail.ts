import { type LicenseUnitsDetail } from './licenseUnitsDetail';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLicenseUnitsDetail(writer: SerializationWriter, licenseUnitsDetail: LicenseUnitsDetail | undefined = {} as LicenseUnitsDetail) : void {
        writer.writeNumberValue("enabled", licenseUnitsDetail.enabled);
        writer.writeNumberValue("lockedOut", licenseUnitsDetail.lockedOut);
        writer.writeStringValue("@odata.type", licenseUnitsDetail.odataType);
        writer.writeNumberValue("suspended", licenseUnitsDetail.suspended);
        writer.writeNumberValue("warning", licenseUnitsDetail.warning);
        writer.writeAdditionalData(licenseUnitsDetail.additionalData);
}
