import { createPermissionGrantConditionSetFromDiscriminatorValue } from './createPermissionGrantConditionSetFromDiscriminatorValue';
import { deserializeIntoPolicyBase } from './deserializeIntoPolicyBase';
import { type PermissionGrantConditionSet } from './permissionGrantConditionSet';
import { type PermissionGrantPolicy } from './permissionGrantPolicy';
import { serializePermissionGrantConditionSet } from './serializePermissionGrantConditionSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantPolicy(permissionGrantPolicy: PermissionGrantPolicy | undefined = {} as PermissionGrantPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(permissionGrantPolicy),
        "excludes": n => { permissionGrantPolicy.excludes = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); },
        "includes": n => { permissionGrantPolicy.includes = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); },
    }
}
