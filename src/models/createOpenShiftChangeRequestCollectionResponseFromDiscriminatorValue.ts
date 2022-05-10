import {OpenShiftChangeRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftChangeRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftChangeRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftChangeRequestCollectionResponseImpl();
}
