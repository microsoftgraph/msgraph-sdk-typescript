import {CopyToSectionRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionRequestBodyImpl();
}
