import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionType} from './permissionType';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionGrantConditionSet(writer: SerializationWriter, permissionGrantConditionSet: PermissionGrantConditionSet | undefined = {} as PermissionGrantConditionSet) : void {
        serializeEntity(writer, permissionGrantConditionSet)
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationIds", permissionGrantConditionSet.clientApplicationIds);
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationPublisherIds", permissionGrantConditionSet.clientApplicationPublisherIds);
        writer.writeBooleanValue("clientApplicationsFromVerifiedPublisherOnly", permissionGrantConditionSet.clientApplicationsFromVerifiedPublisherOnly);
        writer.writeCollectionOfPrimitiveValues<string>("clientApplicationTenantIds", permissionGrantConditionSet.clientApplicationTenantIds);
        writer.writeStringValue("permissionClassification", permissionGrantConditionSet.permissionClassification);
        writer.writeCollectionOfPrimitiveValues<string>("permissions", permissionGrantConditionSet.permissions);
        writer.writeEnumValue<PermissionType>("permissionType", permissionGrantConditionSet.permissionType);
        writer.writeStringValue("resourceApplication", permissionGrantConditionSet.resourceApplication);
}
