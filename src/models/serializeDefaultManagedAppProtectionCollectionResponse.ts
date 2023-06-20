import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {DefaultManagedAppProtectionCollectionResponse} from './defaultManagedAppProtectionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDefaultManagedAppProtection} from './serializeDefaultManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultManagedAppProtectionCollectionResponse(defaultManagedAppProtectionCollectionResponse: DefaultManagedAppProtectionCollectionResponse | undefined = {} as DefaultManagedAppProtectionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, defaultManagedAppProtectionCollectionResponse)
        writer.writeCollectionOfObjectValues<DefaultManagedAppProtection>("value", defaultManagedAppProtectionCollectionResponse.value, serializeDefaultManagedAppProtection);
}
