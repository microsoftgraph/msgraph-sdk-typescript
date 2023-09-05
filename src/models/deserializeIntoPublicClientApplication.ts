import { type PublicClientApplication } from './publicClientApplication';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicClientApplication(publicClientApplication: PublicClientApplication | undefined = {} as PublicClientApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { publicClientApplication.odataType = n.getStringValue(); },
        "redirectUris": n => { publicClientApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
