import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface ResourceAccess extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The unique identifier of an app role or delegated permission exposed by the resource application. For delegated permissions, this should match the id property of one of the delegated permissions in the oauth2PermissionScopes collection of the resource application's service principal. For app roles (application permissions), this should match the id property of an app role in the appRoles collection of the resource application's service principal.
     */
    id?: Guid | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies whether the id property references a delegated permission or an app role (application permission). The possible values are: Scope (for delegated permissions) or Role (for app roles).
     */
    type?: string | undefined;
}
