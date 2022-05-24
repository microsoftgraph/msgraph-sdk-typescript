import {BaseItemVersion} from './baseItemVersion';
import {FieldValueSet} from './fieldValueSet';

export interface ListItemVersion extends BaseItemVersion{
    /** A collection of the fields and values for this version of the list item. */
    fields?:FieldValueSet | undefined;
}
