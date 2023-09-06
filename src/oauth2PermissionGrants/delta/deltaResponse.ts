import { type BaseDeltaFunctionResponse } from '../../models/baseDeltaFunctionResponse';
import { type OAuth2PermissionGrant } from '../../models/oAuth2PermissionGrant';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: OAuth2PermissionGrant[] | undefined;
}
