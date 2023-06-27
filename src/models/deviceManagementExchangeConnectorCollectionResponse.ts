import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceManagementExchangeConnector} from './deviceManagementExchangeConnector';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExchangeConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceManagementExchangeConnector[] | undefined;
}
