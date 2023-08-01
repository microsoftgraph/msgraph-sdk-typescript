import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ExtensionProperty} from './extensionProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExtensionPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExtensionProperty[] | undefined;
}
