import {IsPublishedResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsPublishedResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsPublishedResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsPublishedResponseImpl();
}
