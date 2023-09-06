import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type Workflow } from './workflow';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkflowCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Workflow[] | undefined;
}
