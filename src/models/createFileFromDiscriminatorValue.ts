import {deserializeIntoFile} from './deserializeIntoFile';
import {File} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFile;
}
