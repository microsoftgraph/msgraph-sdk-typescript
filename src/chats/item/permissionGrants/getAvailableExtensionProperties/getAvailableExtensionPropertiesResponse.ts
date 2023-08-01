import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {ExtensionProperty} from '../../../../models/extensionProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAvailableExtensionPropertiesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExtensionProperty[] | undefined;
}
