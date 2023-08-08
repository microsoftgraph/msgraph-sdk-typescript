import type {AppLogCollectionRequest} from './appLogCollectionRequest';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AppLogCollectionRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AppLogCollectionRequest[] | undefined;
}
