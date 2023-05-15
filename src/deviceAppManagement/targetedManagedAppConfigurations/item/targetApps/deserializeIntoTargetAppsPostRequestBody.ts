import {createManagedMobileAppFromDiscriminatorValue} from '../../../../models/createManagedMobileAppFromDiscriminatorValue';
import {ManagedMobileApp} from '../../../../models/managedMobileApp';
import {serializeManagedMobileApp} from '../../../../models/serializeManagedMobileApp';
import {TargetedManagedAppGroupType} from '../../../../models/targetedManagedAppGroupType';
import {TargetAppsPostRequestBody} from './targetAppsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetAppsPostRequestBody(targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {} as TargetAppsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "appGroupType": n => { targetAppsPostRequestBody.appGroupType = n.getEnumValue<TargetedManagedAppGroupType>(TargetedManagedAppGroupType); },
        "apps": n => { targetAppsPostRequestBody.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
    }
}
