import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TokenIssuancePolicy} from './tokenIssuancePolicy';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenIssuancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TokenIssuancePolicy[] | undefined;
}
