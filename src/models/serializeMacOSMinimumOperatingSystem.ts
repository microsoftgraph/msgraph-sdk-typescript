import {MacOSMinimumOperatingSystem} from './macOSMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSMinimumOperatingSystem(writer: SerializationWriter, macOSMinimumOperatingSystem: MacOSMinimumOperatingSystem | undefined = {} as MacOSMinimumOperatingSystem) : void {
        writer.writeStringValue("@odata.type", macOSMinimumOperatingSystem.odataType);
        writer.writeBooleanValue("v10_10", macOSMinimumOperatingSystem.v10_10);
        writer.writeBooleanValue("v10_11", macOSMinimumOperatingSystem.v10_11);
        writer.writeBooleanValue("v10_12", macOSMinimumOperatingSystem.v10_12);
        writer.writeBooleanValue("v10_13", macOSMinimumOperatingSystem.v10_13);
        writer.writeBooleanValue("v10_14", macOSMinimumOperatingSystem.v10_14);
        writer.writeBooleanValue("v10_15", macOSMinimumOperatingSystem.v10_15);
        writer.writeBooleanValue("v10_7", macOSMinimumOperatingSystem.v10_7);
        writer.writeBooleanValue("v10_8", macOSMinimumOperatingSystem.v10_8);
        writer.writeBooleanValue("v10_9", macOSMinimumOperatingSystem.v10_9);
        writer.writeBooleanValue("v11_0", macOSMinimumOperatingSystem.v11_0);
        writer.writeBooleanValue("v12_0", macOSMinimumOperatingSystem.v12_0);
        writer.writeBooleanValue("v13_0", macOSMinimumOperatingSystem.v13_0);
        writer.writeAdditionalData(macOSMinimumOperatingSystem.additionalData);
}
