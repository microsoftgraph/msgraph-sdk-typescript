import {deserializeIntoPrintSettings} from './deserializeIntoPrintSettings';
import {PrintSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintSettings;
}
