import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SynchronizationTemplate} from './synchronizationTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SynchronizationTemplate[] | undefined;
}
