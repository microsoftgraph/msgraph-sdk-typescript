import { deserializeIntoWindows10TeamGeneralConfiguration } from './deserializeIntoWindows10TeamGeneralConfiguration';
import { type Windows10TeamGeneralConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindows10TeamGeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10TeamGeneralConfiguration;
}
