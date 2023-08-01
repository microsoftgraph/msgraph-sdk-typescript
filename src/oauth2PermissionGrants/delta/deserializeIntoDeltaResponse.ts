import {createOAuth2PermissionGrantFromDiscriminatorValue} from '../../models/createOAuth2PermissionGrantFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../models/deserializeIntoBaseDeltaFunctionResponse';
import type {OAuth2PermissionGrant} from '../../models/oAuth2PermissionGrant';
import {serializeOAuth2PermissionGrant} from '../../models/serializeOAuth2PermissionGrant';
import type {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<OAuth2PermissionGrant>(createOAuth2PermissionGrantFromDiscriminatorValue); },
    }
}
