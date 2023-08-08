import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {LearningProvider} from './learningProvider';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface LearningProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LearningProvider[] | undefined;
}
