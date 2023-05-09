import {deserializeIntoLicenseUnitsDetail} from './deserializeIntoLicenseUnitsDetail';
import {LicenseUnitsDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseUnitsDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLicenseUnitsDetail;
}
