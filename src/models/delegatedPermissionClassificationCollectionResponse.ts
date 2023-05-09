import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassificationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DelegatedPermissionClassification[] | undefined;
}
