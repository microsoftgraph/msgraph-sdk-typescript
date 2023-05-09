import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintUsageByUser} from './printUsageByUser';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByUserCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PrintUsageByUser[] | undefined;
}
