import {RevokeSignInSessionsResponse} from './revokeSignInSessionsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRevokeSignInSessionsResponse(writer: SerializationWriter, revokeSignInSessionsResponse: RevokeSignInSessionsResponse | undefined = {} as RevokeSignInSessionsResponse) : void {
        writer.writeBooleanValue("value", revokeSignInSessionsResponse.value);
        writer.writeAdditionalData(revokeSignInSessionsResponse.additionalData);
}
