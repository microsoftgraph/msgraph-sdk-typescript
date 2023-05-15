import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MobileThreatDefenseConnector[] | undefined;
}
