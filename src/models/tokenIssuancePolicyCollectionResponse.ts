import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenIssuancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TokenIssuancePolicy[] | undefined;
}
