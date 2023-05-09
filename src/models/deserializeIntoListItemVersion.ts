import {createFieldValueSetFromDiscriminatorValue} from './createFieldValueSetFromDiscriminatorValue';
import {deserializeIntoBaseItemVersion} from './deserializeIntoBaseItemVersion';
import {FieldValueSet} from './fieldValueSet';
import {ListItemVersion} from './listItemVersion';
import {serializeFieldValueSet} from './serializeFieldValueSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItemVersion(listItemVersion: ListItemVersion | undefined = {} as ListItemVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItemVersion(listItemVersion),
        "fields": n => { listItemVersion.fields = n.getObjectValue<FieldValueSet>(createFieldValueSetFromDiscriminatorValue); },
    }
}
