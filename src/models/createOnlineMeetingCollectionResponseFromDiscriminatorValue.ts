import {OnlineMeetingCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnlineMeetingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnlineMeetingCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnlineMeetingCollectionResponseImpl();
}
