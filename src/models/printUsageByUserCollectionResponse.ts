import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PrintUsageByUser} from './printUsageByUser';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByUserCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintUsageByUser[] | undefined;
}
