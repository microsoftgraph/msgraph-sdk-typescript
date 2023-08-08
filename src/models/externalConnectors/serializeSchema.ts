import {serializeEntity} from '../serializeEntity';
import type {Property} from './property';
import type {Schema} from './schema';
import {serializeProperty} from './serializeProperty';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchema(writer: SerializationWriter, schema: Schema | undefined = {} as Schema) : void {
        serializeEntity(writer, schema)
        writer.writeStringValue("baseType", schema.baseType);
        writer.writeCollectionOfObjectValues<Property>("properties", schema.properties, serializeProperty);
}
