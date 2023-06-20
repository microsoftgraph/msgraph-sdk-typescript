import {OAuth2PermissionGrant} from '../../models/oAuth2PermissionGrant';
import {serializeBaseDeltaFunctionResponse} from '../../models/serializeBaseDeltaFunctionResponse';
import {serializeOAuth2PermissionGrant} from '../../models/serializeOAuth2PermissionGrant';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrant>("value", deltaResponse.value, serializeOAuth2PermissionGrant);
}
