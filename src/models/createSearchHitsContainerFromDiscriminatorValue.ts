import {SearchHitsContainerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchHitsContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchHitsContainerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchHitsContainerImpl();
}
