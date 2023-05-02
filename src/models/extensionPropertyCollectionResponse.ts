import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ExtensionProperty} from './extensionProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExtensionPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ExtensionProperty[] | undefined;
}
