import { type Configuration } from './configuration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConfiguration(writer: SerializationWriter, configuration: Configuration | undefined = {} as Configuration) : void {
        writer.writeCollectionOfPrimitiveValues<string>("authorizedAppIds", configuration.authorizedAppIds);
        writer.writeStringValue("@odata.type", configuration.odataType);
        writer.writeAdditionalData(configuration.additionalData);
}
