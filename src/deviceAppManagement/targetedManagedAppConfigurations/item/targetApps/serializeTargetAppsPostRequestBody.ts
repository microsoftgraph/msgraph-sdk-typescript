import {ManagedMobileApp} from '../../../../models/managedMobileApp';
import {serializeManagedMobileApp} from '../../../../models/serializeManagedMobileApp';
import {TargetedManagedAppGroupType} from '../../../../models/targetedManagedAppGroupType';
import {TargetAppsPostRequestBody} from './targetAppsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetAppsPostRequestBody(writer: SerializationWriter, targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {} as TargetAppsPostRequestBody) : void {
        writer.writeEnumValue<TargetedManagedAppGroupType>("appGroupType", targetAppsPostRequestBody.appGroupType);
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", targetAppsPostRequestBody.apps, serializeManagedMobileApp);
        writer.writeAdditionalData(targetAppsPostRequestBody.additionalData);
}
