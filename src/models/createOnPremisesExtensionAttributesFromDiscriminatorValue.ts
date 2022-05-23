import {OnPremisesExtensionAttributesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesExtensionAttributesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesExtensionAttributesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesExtensionAttributesImpl();
}
