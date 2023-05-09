import {Quota} from './quota';
import {serializeStoragePlanInformation} from './serializeStoragePlanInformation';
import {StoragePlanInformation} from './storagePlanInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeQuota(writer: SerializationWriter, quota: Quota | undefined = {} as Quota) : void {
        writer.writeNumberValue("deleted", quota.deleted);
        writer.writeStringValue("@odata.type", quota.odataType);
        writer.writeNumberValue("remaining", quota.remaining);
        writer.writeStringValue("state", quota.state);
        writer.writeObjectValue<StoragePlanInformation>("storagePlanInformation", quota.storagePlanInformation, serializeStoragePlanInformation);
        writer.writeNumberValue("total", quota.total);
        writer.writeNumberValue("used", quota.used);
        writer.writeAdditionalData(quota.additionalData);
}
