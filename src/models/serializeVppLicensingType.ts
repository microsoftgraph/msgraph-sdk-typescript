import {VppLicensingType} from './vppLicensingType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVppLicensingType(writer: SerializationWriter, vppLicensingType: VppLicensingType | undefined = {} as VppLicensingType) : void {
        writer.writeStringValue("@odata.type", vppLicensingType.odataType);
        writer.writeBooleanValue("supportsDeviceLicensing", vppLicensingType.supportsDeviceLicensing);
        writer.writeBooleanValue("supportsUserLicensing", vppLicensingType.supportsUserLicensing);
        writer.writeAdditionalData(vppLicensingType.additionalData);
}
