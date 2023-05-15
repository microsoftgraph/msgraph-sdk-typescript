import {createIosManagedAppProtectionFromDiscriminatorValue} from './createIosManagedAppProtectionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {IosManagedAppProtection} from './iosManagedAppProtection';
import {IosManagedAppProtectionCollectionResponse} from './iosManagedAppProtectionCollectionResponse';
import {serializeIosManagedAppProtection} from './serializeIosManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppProtectionCollectionResponse(iosManagedAppProtectionCollectionResponse: IosManagedAppProtectionCollectionResponse | undefined = {} as IosManagedAppProtectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosManagedAppProtectionCollectionResponse),
        "value": n => { iosManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValues<IosManagedAppProtection>(createIosManagedAppProtectionFromDiscriminatorValue); },
    }
}
