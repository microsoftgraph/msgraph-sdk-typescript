import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosMinimumOperatingSystem(writer: SerializationWriter, iosMinimumOperatingSystem: IosMinimumOperatingSystem | undefined = {} as IosMinimumOperatingSystem) : void {
        writer.writeStringValue("@odata.type", iosMinimumOperatingSystem.odataType);
        writer.writeBooleanValue("v10_0", iosMinimumOperatingSystem.v10_0);
        writer.writeBooleanValue("v11_0", iosMinimumOperatingSystem.v11_0);
        writer.writeBooleanValue("v12_0", iosMinimumOperatingSystem.v12_0);
        writer.writeBooleanValue("v13_0", iosMinimumOperatingSystem.v13_0);
        writer.writeBooleanValue("v14_0", iosMinimumOperatingSystem.v14_0);
        writer.writeBooleanValue("v15_0", iosMinimumOperatingSystem.v15_0);
        writer.writeBooleanValue("v8_0", iosMinimumOperatingSystem.v8_0);
        writer.writeBooleanValue("v9_0", iosMinimumOperatingSystem.v9_0);
        writer.writeAdditionalData(iosMinimumOperatingSystem.additionalData);
}
