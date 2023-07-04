import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DetectedApp} from './detectedApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DetectedAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DetectedApp[] | undefined;
}
