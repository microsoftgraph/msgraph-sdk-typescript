import {OnPremisesProvisioningErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesProvisioningErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesProvisioningErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesProvisioningErrorImpl();
}
