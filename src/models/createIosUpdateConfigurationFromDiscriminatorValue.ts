import {IosUpdateConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosUpdateConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosUpdateConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosUpdateConfiguration();
}
