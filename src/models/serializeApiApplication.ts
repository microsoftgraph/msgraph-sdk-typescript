import {ApiApplication} from './apiApplication';
import {PermissionScope} from './permissionScope';
import {PreAuthorizedApplication} from './preAuthorizedApplication';
import {serializePermissionScope} from './serializePermissionScope';
import {serializePreAuthorizedApplication} from './serializePreAuthorizedApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApiApplication(apiApplication: ApiApplication | undefined = {} as ApiApplication, writer: SerializationWriter) : void {
        writer.writeBooleanValue("acceptMappedClaims", apiApplication.acceptMappedClaims);
        writer.writeCollectionOfPrimitiveValues<string>("knownClientApplications", apiApplication.knownClientApplications);
        writer.writeCollectionOfObjectValues<PermissionScope>("oauth2PermissionScopes", apiApplication.oauth2PermissionScopes, serializePermissionScope);
        writer.writeStringValue("@odata.type", apiApplication.odataType);
        writer.writeCollectionOfObjectValues<PreAuthorizedApplication>("preAuthorizedApplications", apiApplication.preAuthorizedApplications, serializePreAuthorizedApplication);
        writer.writeNumberValue("requestedAccessTokenVersion", apiApplication.requestedAccessTokenVersion);
        writer.writeAdditionalData(apiApplication.additionalData);
}
