import {Root} from './root';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoot(writer: SerializationWriter, root: Root | undefined = {} as Root) : void {
        writer.writeStringValue("@odata.type", root.odataType);
        writer.writeAdditionalData(root.additionalData);
}
