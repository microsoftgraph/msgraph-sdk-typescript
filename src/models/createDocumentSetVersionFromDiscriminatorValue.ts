import {DocumentSetVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DocumentSetVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DocumentSetVersion();
}
