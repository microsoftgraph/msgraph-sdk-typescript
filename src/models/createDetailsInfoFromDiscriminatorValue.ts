import {DetailsInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDetailsInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : DetailsInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DetailsInfoImpl();
}
