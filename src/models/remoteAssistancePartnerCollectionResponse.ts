import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteAssistancePartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: RemoteAssistancePartner[] | undefined;
}
