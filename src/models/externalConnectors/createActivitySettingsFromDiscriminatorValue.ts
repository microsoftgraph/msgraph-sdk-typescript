import { deserializeIntoActivitySettings } from './deserializeIntoActivitySettings';
import { type ActivitySettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createActivitySettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivitySettings;
}
