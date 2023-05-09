import {deserializeIntoFileDetails} from './deserializeIntoFileDetails';
import {FileDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileDetails;
}
