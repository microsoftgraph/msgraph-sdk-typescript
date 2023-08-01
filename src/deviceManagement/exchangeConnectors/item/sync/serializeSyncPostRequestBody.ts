import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/deviceManagementExchangeConnectorSyncType';
import type {SyncPostRequestBody} from './syncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSyncPostRequestBody(writer: SerializationWriter, syncPostRequestBody: SyncPostRequestBody | undefined = {} as SyncPostRequestBody) : void {
        writer.writeEnumValue<DeviceManagementExchangeConnectorSyncType>("syncType", syncPostRequestBody.syncType);
        writer.writeAdditionalData(syncPostRequestBody.additionalData);
}
