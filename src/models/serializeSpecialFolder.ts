import type {SpecialFolder} from './specialFolder';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSpecialFolder(writer: SerializationWriter, specialFolder: SpecialFolder | undefined = {} as SpecialFolder) : void {
        writer.writeStringValue("name", specialFolder.name);
        writer.writeStringValue("@odata.type", specialFolder.odataType);
        writer.writeAdditionalData(specialFolder.additionalData);
}
