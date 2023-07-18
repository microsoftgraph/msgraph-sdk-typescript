import {ApiApplication} from './apiApplication';
import {createPermissionScopeFromDiscriminatorValue} from './createPermissionScopeFromDiscriminatorValue';
import {createPreAuthorizedApplicationFromDiscriminatorValue} from './createPreAuthorizedApplicationFromDiscriminatorValue';
import {PermissionScope} from './permissionScope';
import {PreAuthorizedApplication} from './preAuthorizedApplication';
import {serializePermissionScope} from './serializePermissionScope';
import {serializePreAuthorizedApplication} from './serializePreAuthorizedApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoApiApplication(apiApplication: ApiApplication | undefined = {} as ApiApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "acceptMappedClaims": n => { apiApplication.acceptMappedClaims = n.getBooleanValue(); },
        "knownClientApplications": n => { apiApplication.knownClientApplications = n.getCollectionOfPrimitiveValues<Guid>(); },
        "oauth2PermissionScopes": n => { apiApplication.oauth2PermissionScopes = n.getCollectionOfObjectValues<PermissionScope>(createPermissionScopeFromDiscriminatorValue); },
        "@odata.type": n => { apiApplication.odataType = n.getStringValue(); },
        "preAuthorizedApplications": n => { apiApplication.preAuthorizedApplications = n.getCollectionOfObjectValues<PreAuthorizedApplication>(createPreAuthorizedApplicationFromDiscriminatorValue); },
        "requestedAccessTokenVersion": n => { apiApplication.requestedAccessTokenVersion = n.getNumberValue(); },
    }
}
