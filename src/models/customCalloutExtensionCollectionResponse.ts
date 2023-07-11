import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {CustomCalloutExtension} from './customCalloutExtension';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomCalloutExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CustomCalloutExtension[] | undefined;
}
