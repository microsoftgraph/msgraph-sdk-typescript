import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Workflow} from './workflow';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkflowCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Workflow[] | undefined;
}
