import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {LearningContent} from './learningContent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LearningContentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LearningContent[] | undefined;
}
