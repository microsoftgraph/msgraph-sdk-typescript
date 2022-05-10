import {OpenShiftCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftCollectionResponseImpl();
}
