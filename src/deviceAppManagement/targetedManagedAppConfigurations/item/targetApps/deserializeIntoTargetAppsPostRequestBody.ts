import { createManagedMobileAppFromDiscriminatorValue } from '../../../../models/createManagedMobileAppFromDiscriminatorValue';
import { type ManagedMobileApp } from '../../../../models/managedMobileApp';
import { serializeManagedMobileApp } from '../../../../models/serializeManagedMobileApp';
import { TargetedManagedAppGroupType } from '../../../../models/targetedManagedAppGroupType';
import { type TargetAppsPostRequestBody } from './targetAppsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetAppsPostRequestBody(targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {} as TargetAppsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "appGroupType": n => { targetAppsPostRequestBody.appGroupType = n.getEnumValue<TargetedManagedAppGroupType>(TargetedManagedAppGroupType); },
        "apps": n => { targetAppsPostRequestBody.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
    }
}
