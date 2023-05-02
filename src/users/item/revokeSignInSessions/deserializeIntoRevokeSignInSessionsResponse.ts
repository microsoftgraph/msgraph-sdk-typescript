import {RevokeSignInSessionsResponse} from './revokeSignInSessionsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRevokeSignInSessionsResponse(revokeSignInSessionsResponse: RevokeSignInSessionsResponse | undefined = {} as RevokeSignInSessionsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { revokeSignInSessionsResponse.value = n.getBooleanValue(); },
    }
}
