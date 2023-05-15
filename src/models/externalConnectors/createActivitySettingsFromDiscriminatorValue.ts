import {deserializeIntoActivitySettings} from './deserializeIntoActivitySettings';
import {ActivitySettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitySettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivitySettings;
}
