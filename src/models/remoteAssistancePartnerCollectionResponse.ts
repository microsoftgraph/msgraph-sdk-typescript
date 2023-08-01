import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {RemoteAssistancePartner} from './remoteAssistancePartner';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteAssistancePartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RemoteAssistancePartner[] | undefined;
}
