import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SchemaExtension } from './schemaExtension';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SchemaExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SchemaExtension[] | undefined;
}
