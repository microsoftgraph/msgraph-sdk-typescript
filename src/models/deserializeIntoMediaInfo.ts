import {MediaInfo} from './mediaInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaInfo(mediaInfo: MediaInfo | undefined = {} as MediaInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mediaInfo.odataType = n.getStringValue(); },
        "resourceId": n => { mediaInfo.resourceId = n.getStringValue(); },
        "uri": n => { mediaInfo.uri = n.getStringValue(); },
    }
}
