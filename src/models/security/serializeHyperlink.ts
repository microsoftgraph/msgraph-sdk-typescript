import { type Hyperlink } from './hyperlink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHyperlink(writer: SerializationWriter, hyperlink: Hyperlink | undefined = {} as Hyperlink) : void {
        writer.writeStringValue("name", hyperlink.name);
        writer.writeStringValue("@odata.type", hyperlink.odataType);
        writer.writeStringValue("url", hyperlink.url);
        writer.writeAdditionalData(hyperlink.additionalData);
}
