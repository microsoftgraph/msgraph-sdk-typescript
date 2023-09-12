import { deserializeIntoEdiscoveryCaseSettings } from './deserializeIntoEdiscoveryCaseSettings';
import { type EdiscoveryCaseSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCaseSettings;
}
