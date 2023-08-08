import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileThreatDefenseConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileThreatDefenseConnector[] | undefined;
}
