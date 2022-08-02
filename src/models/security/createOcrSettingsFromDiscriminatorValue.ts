import {OcrSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOcrSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OcrSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OcrSettings();
}
