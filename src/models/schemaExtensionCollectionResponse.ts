import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SchemaExtension} from './schemaExtension';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SchemaExtension[] | undefined;
}
