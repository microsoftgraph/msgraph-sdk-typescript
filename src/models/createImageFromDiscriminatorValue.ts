import {ImageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImageImpl();
}
