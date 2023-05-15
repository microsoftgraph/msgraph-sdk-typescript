import {deserializeIntoIosUpdateConfiguration} from './deserializeIntoIosUpdateConfiguration';
import {IosUpdateConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosUpdateConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosUpdateConfiguration;
}
