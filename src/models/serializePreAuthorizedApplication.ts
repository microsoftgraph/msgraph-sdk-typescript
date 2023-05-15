import {PreAuthorizedApplication} from './preAuthorizedApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePreAuthorizedApplication(writer: SerializationWriter, preAuthorizedApplication: PreAuthorizedApplication | undefined = {} as PreAuthorizedApplication) : void {
        writer.writeStringValue("appId", preAuthorizedApplication.appId);
        writer.writeCollectionOfPrimitiveValues<string>("delegatedPermissionIds", preAuthorizedApplication.delegatedPermissionIds);
        writer.writeStringValue("@odata.type", preAuthorizedApplication.odataType);
        writer.writeAdditionalData(preAuthorizedApplication.additionalData);
}
