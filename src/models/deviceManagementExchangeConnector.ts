import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExchangeConnector extends Entity, Parsable {
    /**
     * The name of the server hosting the Exchange Connector.
     */
    connectorServerName?: string | undefined;
    /**
     * An alias assigned to the Exchange server
     */
    exchangeAlias?: string | undefined;
    /**
     * The type of Exchange Connector.
     */
    exchangeConnectorType?: DeviceManagementExchangeConnectorType | undefined;
    /**
     * Exchange Organization to the Exchange server
     */
    exchangeOrganization?: string | undefined;
    /**
     * Last sync time for the Exchange Connector
     */
    lastSyncDateTime?: Date | undefined;
    /**
     * Email address used to configure the Service To Service Exchange Connector.
     */
    primarySmtpAddress?: string | undefined;
    /**
     * The name of the Exchange server.
     */
    serverName?: string | undefined;
    /**
     * The current status of the Exchange Connector.
     */
    status?: DeviceManagementExchangeConnectorStatus | undefined;
    /**
     * The version of the ExchangeConnectorAgent
     */
    version?: string | undefined;
}
