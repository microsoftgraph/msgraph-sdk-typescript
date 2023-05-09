import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {AndroidManagedAppProtectionCollectionResponse} from './androidManagedAppProtectionCollectionResponse';
import {serializeAndroidManagedAppProtection} from './serializeAndroidManagedAppProtection';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppProtectionCollectionResponse(writer: SerializationWriter, androidManagedAppProtectionCollectionResponse: AndroidManagedAppProtectionCollectionResponse | undefined = {} as AndroidManagedAppProtectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidManagedAppProtectionCollectionResponse)
        writer.writeCollectionOfObjectValues<AndroidManagedAppProtection>("value", androidManagedAppProtectionCollectionResponse.value, serializeAndroidManagedAppProtection);
}
