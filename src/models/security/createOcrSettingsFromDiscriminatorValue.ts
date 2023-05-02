import {deserializeIntoOcrSettings} from './deserializeIntoOcrSettings';
import {OcrSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOcrSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOcrSettings;
}
