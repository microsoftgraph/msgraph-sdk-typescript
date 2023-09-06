import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type LearningCourseActivity } from './learningCourseActivity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface LearningCourseActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LearningCourseActivity[] | undefined;
}
