import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidMinimumOperatingSystem(writer: SerializationWriter, androidMinimumOperatingSystem: AndroidMinimumOperatingSystem | undefined = {} as AndroidMinimumOperatingSystem) : void {
        writer.writeStringValue("@odata.type", androidMinimumOperatingSystem.odataType);
        writer.writeBooleanValue("v10_0", androidMinimumOperatingSystem.v10_0);
        writer.writeBooleanValue("v11_0", androidMinimumOperatingSystem.v11_0);
        writer.writeBooleanValue("v4_0", androidMinimumOperatingSystem.v4_0);
        writer.writeBooleanValue("v4_0_3", androidMinimumOperatingSystem.v4_0_3);
        writer.writeBooleanValue("v4_1", androidMinimumOperatingSystem.v4_1);
        writer.writeBooleanValue("v4_2", androidMinimumOperatingSystem.v4_2);
        writer.writeBooleanValue("v4_3", androidMinimumOperatingSystem.v4_3);
        writer.writeBooleanValue("v4_4", androidMinimumOperatingSystem.v4_4);
        writer.writeBooleanValue("v5_0", androidMinimumOperatingSystem.v5_0);
        writer.writeBooleanValue("v5_1", androidMinimumOperatingSystem.v5_1);
        writer.writeBooleanValue("v6_0", androidMinimumOperatingSystem.v6_0);
        writer.writeBooleanValue("v7_0", androidMinimumOperatingSystem.v7_0);
        writer.writeBooleanValue("v7_1", androidMinimumOperatingSystem.v7_1);
        writer.writeBooleanValue("v8_0", androidMinimumOperatingSystem.v8_0);
        writer.writeBooleanValue("v8_1", androidMinimumOperatingSystem.v8_1);
        writer.writeBooleanValue("v9_0", androidMinimumOperatingSystem.v9_0);
        writer.writeAdditionalData(androidMinimumOperatingSystem.additionalData);
}
