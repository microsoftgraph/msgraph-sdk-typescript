import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type CustomCalloutExtension } from './customCalloutExtension';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CustomCalloutExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CustomCalloutExtension[] | undefined;
}
