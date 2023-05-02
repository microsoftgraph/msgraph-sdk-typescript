import {OnPremisesExtensionAttributes} from './onPremisesExtensionAttributes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesExtensionAttributes(onPremisesExtensionAttributes: OnPremisesExtensionAttributes | undefined = {} as OnPremisesExtensionAttributes) : Record<string, (node: ParseNode) => void> {
    return {
        "extensionAttribute1": n => { onPremisesExtensionAttributes.extensionAttribute1 = n.getStringValue(); },
        "extensionAttribute10": n => { onPremisesExtensionAttributes.extensionAttribute10 = n.getStringValue(); },
        "extensionAttribute11": n => { onPremisesExtensionAttributes.extensionAttribute11 = n.getStringValue(); },
        "extensionAttribute12": n => { onPremisesExtensionAttributes.extensionAttribute12 = n.getStringValue(); },
        "extensionAttribute13": n => { onPremisesExtensionAttributes.extensionAttribute13 = n.getStringValue(); },
        "extensionAttribute14": n => { onPremisesExtensionAttributes.extensionAttribute14 = n.getStringValue(); },
        "extensionAttribute15": n => { onPremisesExtensionAttributes.extensionAttribute15 = n.getStringValue(); },
        "extensionAttribute2": n => { onPremisesExtensionAttributes.extensionAttribute2 = n.getStringValue(); },
        "extensionAttribute3": n => { onPremisesExtensionAttributes.extensionAttribute3 = n.getStringValue(); },
        "extensionAttribute4": n => { onPremisesExtensionAttributes.extensionAttribute4 = n.getStringValue(); },
        "extensionAttribute5": n => { onPremisesExtensionAttributes.extensionAttribute5 = n.getStringValue(); },
        "extensionAttribute6": n => { onPremisesExtensionAttributes.extensionAttribute6 = n.getStringValue(); },
        "extensionAttribute7": n => { onPremisesExtensionAttributes.extensionAttribute7 = n.getStringValue(); },
        "extensionAttribute8": n => { onPremisesExtensionAttributes.extensionAttribute8 = n.getStringValue(); },
        "extensionAttribute9": n => { onPremisesExtensionAttributes.extensionAttribute9 = n.getStringValue(); },
        "@odata.type": n => { onPremisesExtensionAttributes.odataType = n.getStringValue(); },
    }
}
