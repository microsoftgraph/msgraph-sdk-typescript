import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {DefaultManagedAppProtectionCollectionResponse} from './defaultManagedAppProtectionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDefaultManagedAppProtection} from './serializeDefaultManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultManagedAppProtectionCollectionResponse(writer: SerializationWriter, defaultManagedAppProtectionCollectionResponse: DefaultManagedAppProtectionCollectionResponse | undefined = {} as DefaultManagedAppProtectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, defaultManagedAppProtectionCollectionResponse)
        writer.writeCollectionOfObjectValues<DefaultManagedAppProtection>("value", defaultManagedAppProtectionCollectionResponse.value, serializeDefaultManagedAppProtection);
}
