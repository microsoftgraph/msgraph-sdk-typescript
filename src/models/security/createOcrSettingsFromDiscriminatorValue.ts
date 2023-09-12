import { deserializeIntoOcrSettings } from './deserializeIntoOcrSettings';
import { type OcrSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOcrSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOcrSettings;
}
