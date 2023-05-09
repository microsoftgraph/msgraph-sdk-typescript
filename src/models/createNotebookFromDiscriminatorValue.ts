import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {Notebook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNotebook;
}
