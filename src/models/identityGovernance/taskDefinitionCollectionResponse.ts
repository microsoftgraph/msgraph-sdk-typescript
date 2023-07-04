import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {TaskDefinition} from './taskDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TaskDefinition[] | undefined;
}
