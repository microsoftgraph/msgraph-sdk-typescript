import type {FieldValueSet} from './fieldValueSet';
import type {ListItemVersion} from './listItemVersion';
import {serializeBaseItemVersion} from './serializeBaseItemVersion';
import {serializeFieldValueSet} from './serializeFieldValueSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeListItemVersion(writer: SerializationWriter, listItemVersion: ListItemVersion | undefined = {} as ListItemVersion) : void {
        serializeBaseItemVersion(writer, listItemVersion)
        writer.writeObjectValue<FieldValueSet>("fields", listItemVersion.fields, serializeFieldValueSet);
}
