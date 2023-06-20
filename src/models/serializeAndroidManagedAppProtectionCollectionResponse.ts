import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {AndroidManagedAppProtectionCollectionResponse} from './androidManagedAppProtectionCollectionResponse';
import {serializeAndroidManagedAppProtection} from './serializeAndroidManagedAppProtection';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppProtectionCollectionResponse(androidManagedAppProtectionCollectionResponse: AndroidManagedAppProtectionCollectionResponse | undefined = {} as AndroidManagedAppProtectionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidManagedAppProtectionCollectionResponse)
        writer.writeCollectionOfObjectValues<AndroidManagedAppProtection>("value", androidManagedAppProtectionCollectionResponse.value, serializeAndroidManagedAppProtection);
}
