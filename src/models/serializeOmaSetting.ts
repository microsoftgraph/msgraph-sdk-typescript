import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSetting(writer: SerializationWriter, omaSetting: OmaSetting | undefined = {} as OmaSetting) : void {
        writer.writeStringValue("description", omaSetting.description);
        writer.writeStringValue("displayName", omaSetting.displayName);
        writer.writeStringValue("@odata.type", omaSetting.odataType);
        writer.writeStringValue("omaUri", omaSetting.omaUri);
        writer.writeAdditionalData(omaSetting.additionalData);
}
