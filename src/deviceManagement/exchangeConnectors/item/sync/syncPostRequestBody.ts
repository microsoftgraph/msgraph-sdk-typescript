import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/deviceManagementExchangeConnectorSyncType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SyncPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The syncType property */
    syncType?: DeviceManagementExchangeConnectorSyncType | undefined;
}
