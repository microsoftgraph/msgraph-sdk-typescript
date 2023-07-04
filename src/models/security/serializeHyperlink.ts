import {Hyperlink} from './hyperlink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHyperlink(writer: SerializationWriter, hyperlink: Hyperlink | undefined = {} as Hyperlink) : void {
        writer.writeStringValue("name", hyperlink.name);
        writer.writeStringValue("@odata.type", hyperlink.odataType);
        writer.writeStringValue("url", hyperlink.url);
        writer.writeAdditionalData(hyperlink.additionalData);
}
