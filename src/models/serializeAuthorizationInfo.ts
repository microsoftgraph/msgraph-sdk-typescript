import {AuthorizationInfo} from './authorizationInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthorizationInfo(writer: SerializationWriter, authorizationInfo: AuthorizationInfo | undefined = {} as AuthorizationInfo) : void {
        writer.writeCollectionOfPrimitiveValues<string>("certificateUserIds", authorizationInfo.certificateUserIds);
        writer.writeStringValue("@odata.type", authorizationInfo.odataType);
        writer.writeAdditionalData(authorizationInfo.additionalData);
}
