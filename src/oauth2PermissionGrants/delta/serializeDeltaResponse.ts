import type {OAuth2PermissionGrant} from '../../models/oAuth2PermissionGrant';
import {serializeBaseDeltaFunctionResponse} from '../../models/serializeBaseDeltaFunctionResponse';
import {serializeOAuth2PermissionGrant} from '../../models/serializeOAuth2PermissionGrant';
import type {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("value", deltaResponse.value, serializeOAuth2PermissionGrant);
}
