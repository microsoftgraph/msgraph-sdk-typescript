import {OnPremisesExtensionAttributes} from './onPremisesExtensionAttributes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesExtensionAttributes(writer: SerializationWriter, onPremisesExtensionAttributes: OnPremisesExtensionAttributes | undefined = {} as OnPremisesExtensionAttributes) : void {
        writer.writeStringValue("extensionAttribute1", onPremisesExtensionAttributes.extensionAttribute1);
        writer.writeStringValue("extensionAttribute10", onPremisesExtensionAttributes.extensionAttribute10);
        writer.writeStringValue("extensionAttribute11", onPremisesExtensionAttributes.extensionAttribute11);
        writer.writeStringValue("extensionAttribute12", onPremisesExtensionAttributes.extensionAttribute12);
        writer.writeStringValue("extensionAttribute13", onPremisesExtensionAttributes.extensionAttribute13);
        writer.writeStringValue("extensionAttribute14", onPremisesExtensionAttributes.extensionAttribute14);
        writer.writeStringValue("extensionAttribute15", onPremisesExtensionAttributes.extensionAttribute15);
        writer.writeStringValue("extensionAttribute2", onPremisesExtensionAttributes.extensionAttribute2);
        writer.writeStringValue("extensionAttribute3", onPremisesExtensionAttributes.extensionAttribute3);
        writer.writeStringValue("extensionAttribute4", onPremisesExtensionAttributes.extensionAttribute4);
        writer.writeStringValue("extensionAttribute5", onPremisesExtensionAttributes.extensionAttribute5);
        writer.writeStringValue("extensionAttribute6", onPremisesExtensionAttributes.extensionAttribute6);
        writer.writeStringValue("extensionAttribute7", onPremisesExtensionAttributes.extensionAttribute7);
        writer.writeStringValue("extensionAttribute8", onPremisesExtensionAttributes.extensionAttribute8);
        writer.writeStringValue("extensionAttribute9", onPremisesExtensionAttributes.extensionAttribute9);
        writer.writeStringValue("@odata.type", onPremisesExtensionAttributes.odataType);
        writer.writeAdditionalData(onPremisesExtensionAttributes.additionalData);
}
