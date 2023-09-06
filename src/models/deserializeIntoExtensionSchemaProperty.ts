import { type ExtensionSchemaProperty } from './extensionSchemaProperty';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExtensionSchemaProperty(extensionSchemaProperty: ExtensionSchemaProperty | undefined = {} as ExtensionSchemaProperty) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { extensionSchemaProperty.name = n.getStringValue(); },
        "@odata.type": n => { extensionSchemaProperty.odataType = n.getStringValue(); },
        "type": n => { extensionSchemaProperty.type = n.getStringValue(); },
    }
}
