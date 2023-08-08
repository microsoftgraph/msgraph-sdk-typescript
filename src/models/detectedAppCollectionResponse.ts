import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DetectedApp} from './detectedApp';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DetectedAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DetectedApp[] | undefined;
}
