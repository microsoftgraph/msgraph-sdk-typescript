import type {AndroidManagedAppProtection} from './androidManagedAppProtection';
import type {AndroidManagedAppProtectionCollectionResponse} from './androidManagedAppProtectionCollectionResponse';
import {createAndroidManagedAppProtectionFromDiscriminatorValue} from './createAndroidManagedAppProtectionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAndroidManagedAppProtection} from './serializeAndroidManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppProtectionCollectionResponse(androidManagedAppProtectionCollectionResponse: AndroidManagedAppProtectionCollectionResponse | undefined = {} as AndroidManagedAppProtectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidManagedAppProtectionCollectionResponse),
        "value": n => { androidManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValues<AndroidManagedAppProtection>(createAndroidManagedAppProtectionFromDiscriminatorValue); },
    }
}
