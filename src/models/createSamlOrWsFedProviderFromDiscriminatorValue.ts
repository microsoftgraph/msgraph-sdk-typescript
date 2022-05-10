import {SamlOrWsFedProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlOrWsFedProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : SamlOrWsFedProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SamlOrWsFedProvider();
}
