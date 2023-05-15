import {serializeEntity} from '../serializeEntity';
import {Property} from './property';
import {Schema} from './schema';
import {serializeProperty} from './serializeProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchema(writer: SerializationWriter, schema: Schema | undefined = {} as Schema) : void {
        serializeEntity(writer, schema)
        writer.writeStringValue("baseType", schema.baseType);
        writer.writeCollectionOfObjectValues<Property>("properties", schema.properties, serializeProperty);
}
