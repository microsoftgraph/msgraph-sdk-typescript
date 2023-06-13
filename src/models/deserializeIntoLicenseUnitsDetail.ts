import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseUnitsDetail(licenseUnitsDetail: LicenseUnitsDetail | undefined = {} as LicenseUnitsDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "enabled": n => { licenseUnitsDetail.enabled = n.getNumberValue(); },
        "lockedOut": n => { licenseUnitsDetail.lockedOut = n.getNumberValue(); },
        "@odata.type": n => { licenseUnitsDetail.odataType = n.getStringValue(); },
        "suspended": n => { licenseUnitsDetail.suspended = n.getNumberValue(); },
        "warning": n => { licenseUnitsDetail.warning = n.getNumberValue(); },
    }
}
