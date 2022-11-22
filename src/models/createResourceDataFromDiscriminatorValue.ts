import {ResourceData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceData();
}
