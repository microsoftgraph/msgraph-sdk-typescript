import { type SpaApplication } from './spaApplication';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSpaApplication(writer: SerializationWriter, spaApplication: SpaApplication | undefined = {} as SpaApplication) : void {
        writer.writeStringValue("@odata.type", spaApplication.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("redirectUris", spaApplication.redirectUris);
        writer.writeAdditionalData(spaApplication.additionalData);
}
