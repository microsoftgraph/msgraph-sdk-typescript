import {VppLicensingType} from './vppLicensingType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVppLicensingType(vppLicensingType: VppLicensingType | undefined = {} as VppLicensingType) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { vppLicensingType.odataType = n.getStringValue(); },
        "supportsDeviceLicensing": n => { vppLicensingType.supportsDeviceLicensing = n.getBooleanValue(); },
        "supportsUserLicensing": n => { vppLicensingType.supportsUserLicensing = n.getBooleanValue(); },
    }
}
