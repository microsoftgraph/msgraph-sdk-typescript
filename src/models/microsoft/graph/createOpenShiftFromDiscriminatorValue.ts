import {OpenShift} from './openShift';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShift {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShift();
}
