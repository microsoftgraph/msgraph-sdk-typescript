import {createPermissionGrantConditionSetFromDiscriminatorValue} from './createPermissionGrantConditionSetFromDiscriminatorValue';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {serializePermissionGrantConditionSet} from './serializePermissionGrantConditionSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantPolicy(permissionGrantPolicy: PermissionGrantPolicy | undefined = {} as PermissionGrantPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(permissionGrantPolicy),
        "excludes": n => { permissionGrantPolicy.excludes = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); },
        "includes": n => { permissionGrantPolicy.includes = n.getCollectionOfObjectValues<PermissionGrantConditionSet>(createPermissionGrantConditionSetFromDiscriminatorValue); },
    }
}
