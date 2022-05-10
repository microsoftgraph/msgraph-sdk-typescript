import {ApplicationTemplateCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationTemplateCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationTemplateCollectionResponseImpl();
}
