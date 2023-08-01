import {createManagedMobileAppFromDiscriminatorValue} from '../../../../models/createManagedMobileAppFromDiscriminatorValue';
import type {ManagedMobileApp} from '../../../../models/managedMobileApp';
import {serializeManagedMobileApp} from '../../../../models/serializeManagedMobileApp';
import type {TargetAppsPostRequestBody} from './targetAppsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetAppsPostRequestBody(targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {} as TargetAppsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "apps": n => { targetAppsPostRequestBody.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
    }
}
