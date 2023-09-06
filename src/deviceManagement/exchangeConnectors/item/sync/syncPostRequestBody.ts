import { DeviceManagementExchangeConnectorSyncType } from '../../../../models/deviceManagementExchangeConnectorSyncType';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SyncPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The type of Exchange Connector sync requested.
     */
    syncType?: DeviceManagementExchangeConnectorSyncType | undefined;
}
