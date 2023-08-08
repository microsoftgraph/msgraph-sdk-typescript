import {createStoragePlanInformationFromDiscriminatorValue} from './createStoragePlanInformationFromDiscriminatorValue';
import type {Quota} from './quota';
import {serializeStoragePlanInformation} from './serializeStoragePlanInformation';
import type {StoragePlanInformation} from './storagePlanInformation';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQuota(quota: Quota | undefined = {} as Quota) : Record<string, (node: ParseNode) => void> {
    return {
        "deleted": n => { quota.deleted = n.getNumberValue(); },
        "@odata.type": n => { quota.odataType = n.getStringValue(); },
        "remaining": n => { quota.remaining = n.getNumberValue(); },
        "state": n => { quota.state = n.getStringValue(); },
        "storagePlanInformation": n => { quota.storagePlanInformation = n.getObjectValue<StoragePlanInformation>(createStoragePlanInformationFromDiscriminatorValue); },
        "total": n => { quota.total = n.getNumberValue(); },
        "used": n => { quota.used = n.getNumberValue(); },
    }
}
