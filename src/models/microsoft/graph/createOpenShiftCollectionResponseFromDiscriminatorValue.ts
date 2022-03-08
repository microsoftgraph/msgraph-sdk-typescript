import {OpenShiftCollectionResponse} from './openShiftCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftCollectionResponse();
}
