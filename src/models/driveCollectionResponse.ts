import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Drive} from './drive';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Drive[] | undefined;
}
