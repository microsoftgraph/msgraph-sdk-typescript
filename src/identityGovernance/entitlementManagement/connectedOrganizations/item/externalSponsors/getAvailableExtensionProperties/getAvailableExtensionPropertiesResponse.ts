import {BaseCollectionPaginationCountResponse} from '../../../../../../models/baseCollectionPaginationCountResponse';
import {ExtensionProperty} from '../../../../../../models/extensionProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAvailableExtensionPropertiesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExtensionProperty[] | undefined;
}
