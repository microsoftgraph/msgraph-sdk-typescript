import {IosCustomConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCustomConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCustomConfiguration();
}
