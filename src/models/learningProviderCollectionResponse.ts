import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {LearningProvider} from './learningProvider';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LearningProviderCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LearningProvider[] | undefined;
}
