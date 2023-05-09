import {deserializeIntoOnPremisesExtensionAttributes} from './deserializeIntoOnPremisesExtensionAttributes';
import {OnPremisesExtensionAttributes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesExtensionAttributesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesExtensionAttributes;
}
