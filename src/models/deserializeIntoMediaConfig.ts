import {MediaConfig} from './mediaConfig';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaConfig(mediaConfig: MediaConfig | undefined = {} as MediaConfig) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mediaConfig.odataType = n.getStringValue(); },
    }
}
