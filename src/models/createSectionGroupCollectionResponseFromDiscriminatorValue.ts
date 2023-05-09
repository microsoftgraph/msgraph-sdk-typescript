import {deserializeIntoSectionGroupCollectionResponse} from './deserializeIntoSectionGroupCollectionResponse';
import {SectionGroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSectionGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSectionGroupCollectionResponse;
}
