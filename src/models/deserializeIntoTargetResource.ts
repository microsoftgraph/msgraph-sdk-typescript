import {createModifiedPropertyFromDiscriminatorValue} from './createModifiedPropertyFromDiscriminatorValue';
import {GroupType} from './groupType';
import {ModifiedProperty} from './modifiedProperty';
import {serializeModifiedProperty} from './serializeModifiedProperty';
import {TargetResource} from './targetResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetResource(targetResource: TargetResource | undefined = {} as TargetResource) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { targetResource.displayName = n.getStringValue(); },
        "groupType": n => { targetResource.groupType = n.getEnumValue<GroupType>(GroupType); },
        "id": n => { targetResource.id = n.getStringValue(); },
        "modifiedProperties": n => { targetResource.modifiedProperties = n.getCollectionOfObjectValues<ModifiedProperty>(createModifiedPropertyFromDiscriminatorValue); },
        "@odata.type": n => { targetResource.odataType = n.getStringValue(); },
        "type": n => { targetResource.type = n.getStringValue(); },
        "userPrincipalName": n => { targetResource.userPrincipalName = n.getStringValue(); },
    }
}
