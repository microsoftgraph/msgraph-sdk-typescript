import type {IosManagedAppProtection} from './iosManagedAppProtection';
import type {IosManagedAppProtectionCollectionResponse} from './iosManagedAppProtectionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosManagedAppProtection} from './serializeIosManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppProtectionCollectionResponse(writer: SerializationWriter, iosManagedAppProtectionCollectionResponse: IosManagedAppProtectionCollectionResponse | undefined = {} as IosManagedAppProtectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosManagedAppProtectionCollectionResponse)
        writer.writeCollectionOfObjectValues<IosManagedAppProtection>("value", iosManagedAppProtectionCollectionResponse.value, serializeIosManagedAppProtection);
}
