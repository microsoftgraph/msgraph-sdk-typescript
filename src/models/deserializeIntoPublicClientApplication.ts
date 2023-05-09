import {PublicClientApplication} from './publicClientApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicClientApplication(publicClientApplication: PublicClientApplication | undefined = {} as PublicClientApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { publicClientApplication.odataType = n.getStringValue(); },
        "redirectUris": n => { publicClientApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
