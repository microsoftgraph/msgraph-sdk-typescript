import {PublicClientApplication} from './publicClientApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicClientApplication(writer: SerializationWriter, publicClientApplication: PublicClientApplication | undefined = {} as PublicClientApplication) : void {
        writer.writeStringValue("@odata.type", publicClientApplication.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("redirectUris", publicClientApplication.redirectUris);
        writer.writeAdditionalData(publicClientApplication.additionalData);
}
