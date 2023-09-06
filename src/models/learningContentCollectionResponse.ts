import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type LearningContent } from './learningContent';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface LearningContentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LearningContent[] | undefined;
}
