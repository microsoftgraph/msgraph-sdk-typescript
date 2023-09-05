import { type DefaultManagedAppProtection } from './defaultManagedAppProtection';
import { type DefaultManagedAppProtectionCollectionResponse } from './defaultManagedAppProtectionCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDefaultManagedAppProtection } from './serializeDefaultManagedAppProtection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDefaultManagedAppProtectionCollectionResponse(writer: SerializationWriter, defaultManagedAppProtectionCollectionResponse: DefaultManagedAppProtectionCollectionResponse | undefined = {} as DefaultManagedAppProtectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, defaultManagedAppProtectionCollectionResponse)
        writer.writeCollectionOfObjectValues<DefaultManagedAppProtection>("value", defaultManagedAppProtectionCollectionResponse.value, serializeDefaultManagedAppProtection);
}
