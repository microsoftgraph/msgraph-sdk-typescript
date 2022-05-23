import {ServiceHealthImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthImpl();
}
