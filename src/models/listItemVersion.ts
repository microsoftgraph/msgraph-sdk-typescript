import {BaseItemVersion} from './baseItemVersion';
import {FieldValueSet} from './fieldValueSet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ListItemVersion extends Partial<AdditionalDataHolder>, BaseItemVersion, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of the fields and values for this version of the list item. */
    fields?: FieldValueSet | undefined;
}
