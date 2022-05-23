import {ODataErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createODataErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ODataErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ODataErrorImpl();
}
