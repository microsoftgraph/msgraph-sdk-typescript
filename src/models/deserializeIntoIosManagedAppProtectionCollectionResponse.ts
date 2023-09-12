import { createIosManagedAppProtectionFromDiscriminatorValue } from './createIosManagedAppProtectionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IosManagedAppProtection } from './iosManagedAppProtection';
import { type IosManagedAppProtectionCollectionResponse } from './iosManagedAppProtectionCollectionResponse';
import { serializeIosManagedAppProtection } from './serializeIosManagedAppProtection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppProtectionCollectionResponse(iosManagedAppProtectionCollectionResponse: IosManagedAppProtectionCollectionResponse | undefined = {} as IosManagedAppProtectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosManagedAppProtectionCollectionResponse),
        "value": n => { iosManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValues<IosManagedAppProtection>(createIosManagedAppProtectionFromDiscriminatorValue); },
    }
}
