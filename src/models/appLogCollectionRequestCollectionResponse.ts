import {AppLogCollectionRequest} from './appLogCollectionRequest';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppLogCollectionRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AppLogCollectionRequest[] | undefined;
}
