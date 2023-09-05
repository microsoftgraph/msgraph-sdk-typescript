import { type ApiApplication } from './apiApplication';
import { type PermissionScope } from './permissionScope';
import { type PreAuthorizedApplication } from './preAuthorizedApplication';
import { serializePermissionScope } from './serializePermissionScope';
import { serializePreAuthorizedApplication } from './serializePreAuthorizedApplication';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeApiApplication(writer: SerializationWriter, apiApplication: ApiApplication | undefined = {} as ApiApplication) : void {
        writer.writeBooleanValue("acceptMappedClaims", apiApplication.acceptMappedClaims);
        writer.writeCollectionOfPrimitiveValues<Guid>("knownClientApplications", apiApplication.knownClientApplications);
        writer.writeCollectionOfObjectValues<PermissionScope>("oauth2PermissionScopes", apiApplication.oauth2PermissionScopes, serializePermissionScope);
        writer.writeStringValue("@odata.type", apiApplication.odataType);
        writer.writeCollectionOfObjectValues<PreAuthorizedApplication>("preAuthorizedApplications", apiApplication.preAuthorizedApplications, serializePreAuthorizedApplication);
        writer.writeNumberValue("requestedAccessTokenVersion", apiApplication.requestedAccessTokenVersion);
        writer.writeAdditionalData(apiApplication.additionalData);
}
