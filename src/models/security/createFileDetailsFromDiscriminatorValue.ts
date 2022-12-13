import {FileDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileDetails();
}
