import { type RevokeSignInSessionsResponse } from './revokeSignInSessionsResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRevokeSignInSessionsResponse(writer: SerializationWriter, revokeSignInSessionsResponse: RevokeSignInSessionsResponse | undefined = {} as RevokeSignInSessionsResponse) : void {
        writer.writeBooleanValue("value", revokeSignInSessionsResponse.value);
        writer.writeAdditionalData(revokeSignInSessionsResponse.additionalData);
}
