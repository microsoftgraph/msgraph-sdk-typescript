import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceManagementExchangeConnector } from './deviceManagementExchangeConnector';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceManagementExchangeConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceManagementExchangeConnector[] | undefined;
}
