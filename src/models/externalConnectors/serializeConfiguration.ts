import {Configuration} from './configuration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfiguration(configuration: Configuration | undefined = {} as Configuration, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("authorizedAppIds", configuration.authorizedAppIds);
        writer.writeStringValue("@odata.type", configuration.odataType);
        writer.writeAdditionalData(configuration.additionalData);
}
