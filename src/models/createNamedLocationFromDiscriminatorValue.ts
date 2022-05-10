import {NamedLocationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : NamedLocationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NamedLocationImpl();
}
