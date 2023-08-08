import type {Agreement} from './agreement';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Agreement[] | undefined;
}
