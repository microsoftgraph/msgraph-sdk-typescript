import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SynchronizationTemplate} from './synchronizationTemplate';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SynchronizationTemplate[] | undefined;
}
