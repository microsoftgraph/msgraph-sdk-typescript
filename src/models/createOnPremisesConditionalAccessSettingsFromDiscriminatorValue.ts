import { deserializeIntoOnPremisesConditionalAccessSettings } from './deserializeIntoOnPremisesConditionalAccessSettings';
import { type OnPremisesConditionalAccessSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnPremisesConditionalAccessSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesConditionalAccessSettings;
}
