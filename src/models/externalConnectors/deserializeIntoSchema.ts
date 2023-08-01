import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createPropertyFromDiscriminatorValue} from './createPropertyFromDiscriminatorValue';
import type {Property} from './property';
import type {Schema} from './schema';
import {serializeProperty} from './serializeProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchema(schema: Schema | undefined = {} as Schema) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(schema),
        "baseType": n => { schema.baseType = n.getStringValue(); },
        "properties": n => { schema.properties = n.getCollectionOfObjectValues<Property>(createPropertyFromDiscriminatorValue); },
    }
}
