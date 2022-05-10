import {ApplicationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationImpl();
}
