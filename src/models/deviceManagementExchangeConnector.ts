import {DeviceManagementExchangeConnectorStatus} from './deviceManagementExchangeConnectorStatus';
import {DeviceManagementExchangeConnectorType} from './deviceManagementExchangeConnectorType';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementExchangeConnector extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the server hosting the Exchange Connector. */
    connectorServerName?: string | undefined;
    /** An alias assigned to the Exchange server */
    exchangeAlias?: string | undefined;
    /** The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated. */
    exchangeConnectorType?: DeviceManagementExchangeConnectorType | undefined;
    /** Exchange Organization to the Exchange server */
    exchangeOrganization?: string | undefined;
    /** Last sync time for the Exchange Connector */
    lastSyncDateTime?: Date | undefined;
    /** Email address used to configure the Service To Service Exchange Connector. */
    primarySmtpAddress?: string | undefined;
    /** The name of the Exchange server. */
    serverName?: string | undefined;
    /** Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected. */
    status?: DeviceManagementExchangeConnectorStatus | undefined;
    /** The version of the ExchangeConnectorAgent */
    version?: string | undefined;
}
