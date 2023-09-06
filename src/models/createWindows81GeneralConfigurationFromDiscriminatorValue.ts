import { deserializeIntoWindows81GeneralConfiguration } from './deserializeIntoWindows81GeneralConfiguration';
import { type Windows81GeneralConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindows81GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows81GeneralConfiguration;
}
