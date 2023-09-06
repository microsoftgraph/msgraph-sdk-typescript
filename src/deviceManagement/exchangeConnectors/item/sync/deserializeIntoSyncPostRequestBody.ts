import { DeviceManagementExchangeConnectorSyncType } from '../../../../models/deviceManagementExchangeConnectorSyncType';
import { type SyncPostRequestBody } from './syncPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSyncPostRequestBody(syncPostRequestBody: SyncPostRequestBody | undefined = {} as SyncPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "syncType": n => { syncPostRequestBody.syncType = n.getEnumValue<DeviceManagementExchangeConnectorSyncType>(DeviceManagementExchangeConnectorSyncType); },
    }
}
