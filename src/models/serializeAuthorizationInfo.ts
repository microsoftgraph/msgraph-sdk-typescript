import {AuthorizationInfo} from './authorizationInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthorizationInfo(authorizationInfo: AuthorizationInfo | undefined = {} as AuthorizationInfo, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("certificateUserIds", authorizationInfo.certificateUserIds);
        writer.writeStringValue("@odata.type", authorizationInfo.odataType);
        writer.writeAdditionalData(authorizationInfo.additionalData);
}
