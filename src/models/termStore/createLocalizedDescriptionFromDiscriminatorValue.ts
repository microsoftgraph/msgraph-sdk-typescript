import {deserializeIntoLocalizedDescription} from './deserializeIntoLocalizedDescription';
import {LocalizedDescription} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedDescriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocalizedDescription;
}
