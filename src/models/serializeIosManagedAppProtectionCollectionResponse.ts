import {IosManagedAppProtection} from './iosManagedAppProtection';
import {IosManagedAppProtectionCollectionResponse} from './iosManagedAppProtectionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosManagedAppProtection} from './serializeIosManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppProtectionCollectionResponse(iosManagedAppProtectionCollectionResponse: IosManagedAppProtectionCollectionResponse | undefined = {} as IosManagedAppProtectionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosManagedAppProtectionCollectionResponse)
        writer.writeCollectionOfObjectValues<IosManagedAppProtection>("value", iosManagedAppProtectionCollectionResponse.value, serializeIosManagedAppProtection);
}
