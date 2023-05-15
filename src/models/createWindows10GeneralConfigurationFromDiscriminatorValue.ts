import {deserializeIntoWindows10GeneralConfiguration} from './deserializeIntoWindows10GeneralConfiguration';
import {Windows10GeneralConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10GeneralConfiguration;
}
