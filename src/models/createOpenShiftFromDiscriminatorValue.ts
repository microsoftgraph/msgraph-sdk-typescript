import {OpenShiftImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftImpl();
}
