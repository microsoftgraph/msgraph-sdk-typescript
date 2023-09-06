import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type TaskDefinition } from './taskDefinition';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TaskDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TaskDefinition[] | undefined;
}
