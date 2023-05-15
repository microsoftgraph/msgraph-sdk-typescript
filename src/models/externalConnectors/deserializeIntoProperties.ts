import {Properties} from './properties';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProperties(properties: Properties | undefined = {} as Properties) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { properties.odataType = n.getStringValue(); },
    }
}
