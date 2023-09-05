import { createFieldValueSetFromDiscriminatorValue } from './createFieldValueSetFromDiscriminatorValue';
import { deserializeIntoBaseItemVersion } from './deserializeIntoBaseItemVersion';
import { type FieldValueSet } from './fieldValueSet';
import { type ListItemVersion } from './listItemVersion';
import { serializeFieldValueSet } from './serializeFieldValueSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoListItemVersion(listItemVersion: ListItemVersion | undefined = {} as ListItemVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItemVersion(listItemVersion),
        "fields": n => { listItemVersion.fields = n.getObjectValue<FieldValueSet>(createFieldValueSetFromDiscriminatorValue); },
    }
}
