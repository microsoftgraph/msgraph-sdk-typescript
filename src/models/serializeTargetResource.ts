import {GroupType} from './groupType';
import {ModifiedProperty} from './modifiedProperty';
import {serializeModifiedProperty} from './serializeModifiedProperty';
import {TargetResource} from './targetResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetResource(writer: SerializationWriter, targetResource: TargetResource | undefined = {} as TargetResource) : void {
        writer.writeStringValue("displayName", targetResource.displayName);
        writer.writeEnumValue<GroupType>("groupType", targetResource.groupType);
        writer.writeStringValue("id", targetResource.id);
        writer.writeCollectionOfObjectValues<ModifiedProperty>("modifiedProperties", targetResource.modifiedProperties, serializeModifiedProperty);
        writer.writeStringValue("@odata.type", targetResource.odataType);
        writer.writeStringValue("type", targetResource.type);
        writer.writeStringValue("userPrincipalName", targetResource.userPrincipalName);
        writer.writeAdditionalData(targetResource.additionalData);
}
