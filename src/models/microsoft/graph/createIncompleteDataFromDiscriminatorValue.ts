import {IncompleteData} from './incompleteData';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncompleteDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncompleteData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncompleteData();
}
