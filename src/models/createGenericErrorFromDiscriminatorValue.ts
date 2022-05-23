import {GenericErrorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGenericErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : GenericErrorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GenericErrorImpl();
}
