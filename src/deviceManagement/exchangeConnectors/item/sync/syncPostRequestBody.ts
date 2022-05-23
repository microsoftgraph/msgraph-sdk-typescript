import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/deviceManagementExchangeConnectorSyncType';

export interface SyncPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The syncType property */
    syncType?:DeviceManagementExchangeConnectorSyncType | undefined;
}
