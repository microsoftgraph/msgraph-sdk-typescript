import type {ManagedMobileApp} from '../../../../../../models/managedMobileApp';
import {serializeManagedMobileApp} from '../../../../../../models/serializeManagedMobileApp';
import type {TargetAppsPostRequestBody} from './targetAppsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetAppsPostRequestBody(writer: SerializationWriter, targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {} as TargetAppsPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", targetAppsPostRequestBody.apps, serializeManagedMobileApp);
        writer.writeAdditionalData(targetAppsPostRequestBody.additionalData);
}
