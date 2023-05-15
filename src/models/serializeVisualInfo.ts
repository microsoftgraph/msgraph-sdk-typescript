import {ImageInfo} from './imageInfo';
import {Json} from './json';
import {serializeImageInfo} from './serializeImageInfo';
import {serializeJson} from './serializeJson';
import {VisualInfo} from './visualInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVisualInfo(writer: SerializationWriter, visualInfo: VisualInfo | undefined = {} as VisualInfo) : void {
        writer.writeObjectValue<ImageInfo>("attribution", visualInfo.attribution, serializeImageInfo);
        writer.writeStringValue("backgroundColor", visualInfo.backgroundColor);
        writer.writeObjectValue<Json>("content", visualInfo.content, serializeJson);
        writer.writeStringValue("description", visualInfo.description);
        writer.writeStringValue("displayText", visualInfo.displayText);
        writer.writeStringValue("@odata.type", visualInfo.odataType);
        writer.writeAdditionalData(visualInfo.additionalData);
}
