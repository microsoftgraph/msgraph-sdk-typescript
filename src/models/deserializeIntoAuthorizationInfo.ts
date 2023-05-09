import {AuthorizationInfo} from './authorizationInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthorizationInfo(authorizationInfo: AuthorizationInfo | undefined = {} as AuthorizationInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "certificateUserIds": n => { authorizationInfo.certificateUserIds = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { authorizationInfo.odataType = n.getStringValue(); },
    }
}
