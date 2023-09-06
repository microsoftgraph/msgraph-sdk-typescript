import { deserializeIntoSamlSingleSignOnSettings } from './deserializeIntoSamlSingleSignOnSettings';
import { type SamlSingleSignOnSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSamlSingleSignOnSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSamlSingleSignOnSettings;
}
