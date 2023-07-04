import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SchemaExtension} from './schemaExtension';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SchemaExtension[] | undefined;
}
