import {createExtensionSchemaPropertyFromDiscriminatorValue} from './createExtensionSchemaPropertyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ExtensionSchemaProperty} from './extensionSchemaProperty';
import {SchemaExtension} from './schemaExtension';
import {serializeExtensionSchemaProperty} from './serializeExtensionSchemaProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchemaExtension(schemaExtension: SchemaExtension | undefined = {} as SchemaExtension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(schemaExtension),
        "description": n => { schemaExtension.description = n.getStringValue(); },
        "owner": n => { schemaExtension.owner = n.getStringValue(); },
        "properties": n => { schemaExtension.properties = n.getCollectionOfObjectValues<ExtensionSchemaProperty>(createExtensionSchemaPropertyFromDiscriminatorValue); },
        "status": n => { schemaExtension.status = n.getStringValue(); },
        "targetTypes": n => { schemaExtension.targetTypes = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
