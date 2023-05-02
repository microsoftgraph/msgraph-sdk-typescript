import {deserializeIntoOpenShiftChangeRequestCollectionResponse} from './deserializeIntoOpenShiftChangeRequestCollectionResponse';
import {OpenShiftChangeRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftChangeRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenShiftChangeRequestCollectionResponse;
}
