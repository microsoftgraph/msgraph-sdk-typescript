import {OnPremisesConditionalAccessSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesConditionalAccessSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesConditionalAccessSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesConditionalAccessSettingsImpl();
}
