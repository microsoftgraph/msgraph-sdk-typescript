import type {BaseItemVersion} from './baseItemVersion';
import type {FieldValueSet} from './fieldValueSet';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemVersion extends BaseItemVersion, Parsable {
    /**
     * A collection of the fields and values for this version of the list item.
     */
    fields?: FieldValueSet | undefined;
}
