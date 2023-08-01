import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Participant} from './participant';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ParticipantCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Participant[] | undefined;
}
