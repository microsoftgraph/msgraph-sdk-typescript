import {ResourceVisualization} from './resourceVisualization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceVisualization(resourceVisualization: ResourceVisualization | undefined = {} as ResourceVisualization) : Record<string, (node: ParseNode) => void> {
    return {
        "containerDisplayName": n => { resourceVisualization.containerDisplayName = n.getStringValue(); },
        "containerType": n => { resourceVisualization.containerType = n.getStringValue(); },
        "containerWebUrl": n => { resourceVisualization.containerWebUrl = n.getStringValue(); },
        "mediaType": n => { resourceVisualization.mediaType = n.getStringValue(); },
        "@odata.type": n => { resourceVisualization.odataType = n.getStringValue(); },
        "previewImageUrl": n => { resourceVisualization.previewImageUrl = n.getStringValue(); },
        "previewText": n => { resourceVisualization.previewText = n.getStringValue(); },
        "title": n => { resourceVisualization.title = n.getStringValue(); },
        "type": n => { resourceVisualization.type = n.getStringValue(); },
    }
}
