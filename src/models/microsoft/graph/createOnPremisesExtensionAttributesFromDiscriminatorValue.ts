import {OnPremisesExtensionAttributes} from './onPremisesExtensionAttributes';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesExtensionAttributesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesExtensionAttributes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesExtensionAttributes();
}
