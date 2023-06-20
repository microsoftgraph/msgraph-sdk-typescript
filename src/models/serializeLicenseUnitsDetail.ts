import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseUnitsDetail(licenseUnitsDetail: LicenseUnitsDetail | undefined = {} as LicenseUnitsDetail, writer: SerializationWriter) : void {
        writer.writeNumberValue("enabled", licenseUnitsDetail.enabled);
        writer.writeNumberValue("lockedOut", licenseUnitsDetail.lockedOut);
        writer.writeStringValue("@odata.type", licenseUnitsDetail.odataType);
        writer.writeNumberValue("suspended", licenseUnitsDetail.suspended);
        writer.writeNumberValue("warning", licenseUnitsDetail.warning);
        writer.writeAdditionalData(licenseUnitsDetail.additionalData);
}
