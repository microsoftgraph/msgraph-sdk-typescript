import {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {OAuth2PermissionGrant} from '../../models/oAuth2PermissionGrant';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: OAuth2PermissionGrant[] | undefined;
}
