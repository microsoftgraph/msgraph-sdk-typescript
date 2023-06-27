import {BaseItemVersion} from './baseItemVersion';
import {FieldValueSet} from './fieldValueSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemVersion extends BaseItemVersion, Parsable {
    /**
     * A collection of the fields and values for this version of the list item.
     */
    fields?: FieldValueSet | undefined;
}
