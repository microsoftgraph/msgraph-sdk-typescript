import {deserializeIntoApplicationTemplateCollectionResponse} from './deserializeIntoApplicationTemplateCollectionResponse';
import {ApplicationTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplicationTemplateCollectionResponse;
}
