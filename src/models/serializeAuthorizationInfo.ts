import { type AuthorizationInfo } from './authorizationInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthorizationInfo(writer: SerializationWriter, authorizationInfo: AuthorizationInfo | undefined = {} as AuthorizationInfo) : void {
        writer.writeCollectionOfPrimitiveValues<string>("certificateUserIds", authorizationInfo.certificateUserIds);
        writer.writeStringValue("@odata.type", authorizationInfo.odataType);
        writer.writeAdditionalData(authorizationInfo.additionalData);
}
