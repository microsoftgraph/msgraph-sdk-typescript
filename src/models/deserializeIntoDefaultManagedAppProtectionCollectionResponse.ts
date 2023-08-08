import {createDefaultManagedAppProtectionFromDiscriminatorValue} from './createDefaultManagedAppProtectionFromDiscriminatorValue';
import type {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import type {DefaultManagedAppProtectionCollectionResponse} from './defaultManagedAppProtectionCollectionResponse';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeDefaultManagedAppProtection} from './serializeDefaultManagedAppProtection';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultManagedAppProtectionCollectionResponse(defaultManagedAppProtectionCollectionResponse: DefaultManagedAppProtectionCollectionResponse | undefined = {} as DefaultManagedAppProtectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(defaultManagedAppProtectionCollectionResponse),
        "value": n => { defaultManagedAppProtectionCollectionResponse.value = n.getCollectionOfObjectValues<DefaultManagedAppProtection>(createDefaultManagedAppProtectionFromDiscriminatorValue); },
    }
}
