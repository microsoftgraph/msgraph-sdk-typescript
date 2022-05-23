import {SearchEntityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchEntityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchEntityImpl();
}
