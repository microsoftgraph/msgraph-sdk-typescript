import {FileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileImpl();
}
