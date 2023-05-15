import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {serializePermissionGrantConditionSet} from './serializePermissionGrantConditionSet';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionGrantPolicy(writer: SerializationWriter, permissionGrantPolicy: PermissionGrantPolicy | undefined = {} as PermissionGrantPolicy) : void {
        serializePolicyBase(writer, permissionGrantPolicy)
        writer.writeCollectionOfObjectValues<PermissionGrantConditionSet>("excludes", permissionGrantPolicy.excludes, serializePermissionGrantConditionSet);
        writer.writeCollectionOfObjectValues<PermissionGrantConditionSet>("includes", permissionGrantPolicy.includes, serializePermissionGrantConditionSet);
}
