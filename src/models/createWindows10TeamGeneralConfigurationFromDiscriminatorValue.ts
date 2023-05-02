import {deserializeIntoWindows10TeamGeneralConfiguration} from './deserializeIntoWindows10TeamGeneralConfiguration';
import {Windows10TeamGeneralConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10TeamGeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10TeamGeneralConfiguration;
}
