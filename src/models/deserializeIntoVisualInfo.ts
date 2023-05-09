import {createImageInfoFromDiscriminatorValue} from './createImageInfoFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {ImageInfo} from './imageInfo';
import {Json} from './json';
import {serializeImageInfo} from './serializeImageInfo';
import {serializeJson} from './serializeJson';
import {VisualInfo} from './visualInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVisualInfo(visualInfo: VisualInfo | undefined = {} as VisualInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "attribution": n => { visualInfo.attribution = n.getObjectValue<ImageInfo>(createImageInfoFromDiscriminatorValue); },
        "backgroundColor": n => { visualInfo.backgroundColor = n.getStringValue(); },
        "content": n => { visualInfo.content = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "description": n => { visualInfo.description = n.getStringValue(); },
        "displayText": n => { visualInfo.displayText = n.getStringValue(); },
        "@odata.type": n => { visualInfo.odataType = n.getStringValue(); },
    }
}
