import {OpenShiftChangeRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftChangeRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftChangeRequestImpl();
}
