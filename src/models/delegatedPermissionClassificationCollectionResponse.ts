import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassificationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DelegatedPermissionClassification[] | undefined;
}
